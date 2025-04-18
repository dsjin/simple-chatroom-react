import { ChatItem } from "../../../../../types/chat"
import { formatDate } from "../../../../../utils/format-date"
import { StyledChatBoxDetailItemWrapper } from "./styled"

type ChatBoxDetailItem = {
  item: ChatItem
}

function ChatBoxDetailItem({
  item
}: ChatBoxDetailItem) {
  return (
    <StyledChatBoxDetailItemWrapper
      className="right"
    >
      <p>
        { item.owner.name } | { formatDate(item.timestamp) }
      </p>
    </StyledChatBoxDetailItemWrapper>
  )
}

export default ChatBoxDetailItem
