import { ChatContext } from "."
import { v4 as uuidv4 } from 'uuid'
import {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { ChatItemType, ChatUser } from '../../../../../types/chat'
import useChat from '../../hooks/use-chat'
import { supabase } from '../../../../../libs/supabase'

type Props = {
  children: ReactElement
}

function ChatContextProvider({ children }: Props) {
  const {
    chatText,
    chats,
    chatUser,
    chatUsers,
    setChatText,
    setChats,
    setChatUser,
    setChatUsers,
  } = useChat()

  const [busy, setBusy] = useState<boolean>(false)
  const [init, setInit] = useState<boolean>(true)
  const initComplete = useRef<boolean>(false)

  const handleNewChatUser = useCallback(
    (chatUser: ChatUser, notificationFlag: boolean = true) => {
      setChatUsers(prev => [...prev, chatUser])
      if (notificationFlag) {
        setChats(prev => [
          ...prev,
          {
            id: uuidv4(),
            text: `${chatUser.name} has joined the chat.`,
            owner: undefined,
            timestamp: new Date().getTime(),
            type: ChatItemType.NOTIFICATION,
          },
        ])
      }
    },
    [setChatUsers, setChats]
  )

  const handleLeaveChatUser = useCallback((chatUser: ChatUser) => {
    setChatUsers(prev => prev.filter(item => item.id !== chatUser.id))

    setChats(prev => [
      ...prev,
      {
        id: uuidv4(),
        text: `${chatUser.name} has left the chat.`,
        owner: undefined,
        timestamp: new Date().getTime(),
        type: ChatItemType.NOTIFICATION,
      },
    ])
  }, [setChatUsers, setChats])

  useEffect(() => {
    if (!chatUser) {
      return
    }

    const channel = supabase.channel(import.meta.env.SUPABASE_CHANNEL_NAME)

    channel
      .on('broadcast', { event: 'message' }, ({ payload }) => {
        setChats(prev => [...prev, payload])
      })
      .on('presence', { event: 'join' }, ({ newPresences }) => {
        for (let index = 0; index < newPresences.length; index++) {
          const element = newPresences[index]
          handleNewChatUser(
            element as any,
            initComplete.current || element.id === chatUser.id
          )
          if (element.id === chatUser.id) {
            initComplete.current = true
          }
        }
      })
      .on('presence', { event: 'leave' }, ({ leftPresences }) => {
        for (let index = 0; index < leftPresences.length; index++) {
          const element = leftPresences[index]
          handleLeaveChatUser(element as any)
        }
      })
      .subscribe(async (status: string) => {
        if (status === 'SUBSCRIBED') {
          await channel.track(chatUser)
          setBusy(false)
          setInit(false)
        }
      })

    return () => {
      channel.unsubscribe()
    }
  }, [chatUser, handleNewChatUser, handleLeaveChatUser, setChats])

  return (
    <ChatContext.Provider
      value={{
        chatText,
        chats,
        chatUser,
        chatUsers,
        setChatText,
        busy,
        setBusy,
        init,
        handleSubmitChat: (text: string) => {
          if (!text) {
            return
          }
          supabase.channel(import.meta.env.SUPABASE_CHANNEL_NAME).send({
            type: 'broadcast',
            event: 'message',
            payload: {
              id: uuidv4(),
              text: text,
              owner: chatUser
                ? chatUser
                : {
                    id: 'unknown',
                    name: 'unknown',
                  },
              timestamp: new Date().getTime(),
              type: ChatItemType.GENERAL,
            },
          })
          setChatText('')
        },
        handleSubmitChatUser: (chatUser: ChatUser) => {
          setBusy(true)
          setChatUser(chatUser)
        },
        handleNewChatUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider
