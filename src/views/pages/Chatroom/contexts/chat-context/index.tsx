import {
  createContext,
  useContext,
} from 'react'
import { ChatItem, ChatUser } from '../../../../../types/chat'

export type ChatContextType = {
  chatText: string
  chats: ChatItem[]
  chatUser: ChatUser | undefined
  chatUsers: ChatUser[]
  init: boolean
  busy: boolean
  setBusy: (value: boolean) => void
  setChatText: (value: string) => void
  handleSubmitChat: (text: string) => void
  handleSubmitChatUser: (chatUser: ChatUser) => void
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
