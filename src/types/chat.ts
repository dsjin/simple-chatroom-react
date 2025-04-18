export type ChatItem = {
  id: string
  text: string
  owner: ChatUser
  timestamp: number
}

export type ChatUser = {
  id: string
  name: string
}
