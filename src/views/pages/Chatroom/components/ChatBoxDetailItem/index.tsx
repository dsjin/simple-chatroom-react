import { ChatItem } from '../../../../../types/chat'
import { formatDate } from '../../../../../utils/format-date'
import {
  StyledChatBoxDetailItemWrapper,
  StyledChatBubbleWrapper,
} from './styled'

type ChatBoxDetailItem = {
  item: ChatItem
}

function ChatBoxDetailItem({ item }: ChatBoxDetailItem) {
  return (
    <StyledChatBoxDetailItemWrapper className="right">
      <p className="chat-detail-item-name">
        {item.owner.name} | {formatDate(item.timestamp)}
      </p>
      <StyledChatBubbleWrapper>
        { item.text }
      </StyledChatBubbleWrapper>
    </StyledChatBoxDetailItemWrapper>
  )
}

export default ChatBoxDetailItem
