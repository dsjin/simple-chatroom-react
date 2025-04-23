export enum ChatItemType {
  GENERAL = 'general',
  NOTIFICATION = 'notification'
}

export type ChatItem = {
  id: string
  text: string
  owner: ChatUser | undefined
  timestamp: number
  type: ChatItemType
}

export type ChatUser = {
  id: string
  name: string
}
