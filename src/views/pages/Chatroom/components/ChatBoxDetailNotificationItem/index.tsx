import { ChatItem } from '../../../../../types/chat'
import { formatDate } from '../../../../../utils/format-date'
import {
    StyledChatBoxDetailNotificationItemWrapper,
    StyledChatNotificationBubbleWrapper,
} from './styled'

type ChatBoxDetailItem = {
  item: ChatItem
}

function ChatBoxDetailNoticationItem({ item }: ChatBoxDetailItem) {

  return (
    <StyledChatBoxDetailNotificationItemWrapper>
      <StyledChatNotificationBubbleWrapper>
        <p className="chat-notification-item">
          - {formatDate(item.timestamp)} -
        </p>
        <p className="chat-notification-item">
          { item.text }
        </p>
      </StyledChatNotificationBubbleWrapper>
    </StyledChatBoxDetailNotificationItemWrapper>
  )
}

export default ChatBoxDetailNoticationItem
