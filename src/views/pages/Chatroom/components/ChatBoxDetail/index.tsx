import { StyledChatBoxDetailInner, StyledChatBoxDetailWrapper } from "./styled"
import ChatBoxDetailItem from "../ChatBoxDetailItem"
import ChatBoxDetailInput from "../ChatBoxDetailInput"

function ChatBoxDetail() {
  return (
    <StyledChatBoxDetailWrapper>
      <StyledChatBoxDetailInner>
        <ChatBoxDetailItem item={{
          id: 'test',
          text: 'test',
          owner: {
            id: 'test',
            name: 'Test'
          },
          timestamp: (new Date()).getTime(),
        }}/>
      </StyledChatBoxDetailInner>
      <ChatBoxDetailInput>

      </ChatBoxDetailInput>
    </StyledChatBoxDetailWrapper>
  )
}

export default ChatBoxDetail
