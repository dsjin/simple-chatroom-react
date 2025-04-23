import { StyledChatBoxWrapper } from "./styled"
import ChatBoxHeader from "../ChatBoxHeader"
import ChatBoxDetail from "../ChatBoxDetail"
import { useChatContext } from "../../contexts/chat-context"
import ChatBoxUserInput from "../ChatBoxUserInput"

function ChatBox () {

  const {
    chatUser,
    busy
  } = useChatContext()

  return (
    <StyledChatBoxWrapper className={busy ? 'busy' : undefined}>
      {
        chatUser ? (
          <>
            <ChatBoxHeader />
            <ChatBoxDetail />
          </>
        ) : (
          <>
            <ChatBoxUserInput />
          </>
        )
      }
    </StyledChatBoxWrapper>
  )
}

export default ChatBox
