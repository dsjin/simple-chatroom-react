import { useState } from 'react'
import { ChatItem, ChatUser } from '../../../../../types/chat'

function useChat() {
  const [chatText, setChatText] = useState<string>('')
  const [chats, setChats] = useState<ChatItem[]>([])
  const [chatUser, setChatUser] = useState<ChatUser | undefined>(undefined)
  const [chatUsers, setChatUsers] = useState<ChatUser[]>([])

  return {
    chatText,
    chats,
    chatUser,
    chatUsers,
    setChatText,
    setChats,
    setChatUser,
    setChatUsers
  }
}

export default useChat
