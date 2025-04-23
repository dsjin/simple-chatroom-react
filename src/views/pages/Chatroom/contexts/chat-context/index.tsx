import { createContext, ReactElement, useContext, useEffect, useState } from 'react'
import { ChatItem, ChatUser } from '../../../../../types/chat'
import useChat from '../../hooks/use-chat'

type Props = {
  children: ReactElement
}

export type ChatContextType = {
  chatText: string
  chats: ChatItem[]
  chatUser: ChatUser | undefined
  chatUsers: ChatUser[]
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

  useEffect(() => {

    const currentChatUser: ChatUser = {
      id: '@dsjin',
      name: 'DSJIN'
    }

    setChatUser(currentChatUser)

    setChatUsers(
      [
        ...chatUsers,
        currentChatUser
      ]
    )

    return () => {
      setChatUser(undefined)
    }
  }, [])

  return (
    <ChatContext.Provider
      value={{
        chatText,
        chats,
        chatUser,
        chatUsers,
        setChatText,
        handleSubmitChat: (text: string) => {
          if (!text) {
            return
          }
          setChats(
            [
              ...chats,
              {
                id: `chat-${chats.length + 1}`,
                text: text,
                owner: chatUser ? chatUser : {
                  id: 'unknown',
                  name: 'unknown'
                },
                timestamp: new Date().getTime(),
              }
            ]
          )
          setChatText('')
        },
        handleNewChatUser: (chatUser: ChatUser) => {},
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export default ChatContextProvider

