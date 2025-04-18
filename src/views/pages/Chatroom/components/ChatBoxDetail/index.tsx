import { Box } from "@mui/material"
import { StyledChatBoxDetailInner, StyledChatBoxDetailWrapper } from "./styled"
import ChatBoxDetailItem from "../ChatBoxDetailItem"

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
    </StyledChatBoxDetailWrapper>
  )
}

export default ChatBoxDetail
