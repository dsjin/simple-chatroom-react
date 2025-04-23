import { StyledChatBoxWrapper } from "./styled"
import ChatBoxHeader from "../ChatBoxHeader"
import ChatBoxDetail from "../ChatBoxDetail"

function ChatBox () {
  return (
    <StyledChatBoxWrapper>
      <ChatBoxHeader />
      <ChatBoxDetail />
    </StyledChatBoxWrapper>
  )
}

export default ChatBox
