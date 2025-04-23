import { v4 as uuidv4 } from 'uuid'
import { createContext, ReactElement, useContext, useState } from 'react'
import { ChatItem, ChatItemType, ChatUser } from '../../../../../types/chat'
import useChat from '../../hooks/use-chat'

type Props = {
  children: ReactElement
}

export type ChatContextType = {
  chatText: string
  chats: ChatItem[]
  chatUser: ChatUser | undefined
  chatUsers: ChatUser[]
  busy: boolean
  setBusy: (value: boolean) => void
  setChatText: (value: string) => void
  handleSubmitChat: (text: string) => void
  handleNewChatUser: (chatUser: ChatUser) => void
}

export const ChatContext = createContext<ChatContextType | null>(null)

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (context === undefined || context === null) {
    throw new Error('useChatContext must be used within a ChatContext')
  }
  return context
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
        handleSubmitChat: (text: string) => {
          if (!text) {
            return
          }
          setChats([
            ...chats,
            {
              id: `chat-${chats.length + 1}`,
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
          ])
          setChatText('')
        },
        handleNewChatUser: (chatUser: ChatUser) => {
          setBusy(true)

          setTimeout(() => {
            setChatUser(chatUser)

            setChatUsers([...chatUsers, chatUser])

            setChats([
              ...chats,
              {
                id: uuidv4(),
                text: `${chatUser.name} has joined the chat.`,
                owner: undefined,
                timestamp: new Date().getTime(),
                type: ChatItemType.NOTIFICATION,
              },
            ])

            setBusy(false)
          }, 5000)
        },
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider
