import { ChatItem } from '../../../../../types/chat'
import { formatDate } from '../../../../../utils/format-date'
import { useChatContext } from '../../contexts/chat-context'
import {
  StyledChatBoxDetailItemWrapper,
  StyledChatBubbleWrapper,
} from './styled'

type ChatBoxDetailItem = {
  item: ChatItem
}

function ChatBoxDetailItem({ item }: ChatBoxDetailItem) {

  const { chatUser } = useChatContext()

  return (
    <StyledChatBoxDetailItemWrapper className={chatUser?.id === item.owner?.id ? 'right' : 'left'}>
      <p className="chat-detail-item-name">
        {item.owner?.name} | {formatDate(item.timestamp)}
      </p>
      <StyledChatBubbleWrapper>
        { item.text }
      </StyledChatBubbleWrapper>
    </StyledChatBoxDetailItemWrapper>
  )
}

export default ChatBoxDetailItem
