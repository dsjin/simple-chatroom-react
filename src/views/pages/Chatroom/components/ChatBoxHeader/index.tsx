import { Typography } from "@mui/material"
import { StyledChatBoxHeaderWrapper } from "./styled"

function ChatBoxHeader () {
  return (
    <StyledChatBoxHeaderWrapper>
      <Typography variant="h2" component="h1">
        Chat
      </Typography>
      <p>
        Total Online: 0
      </p>
    </StyledChatBoxHeaderWrapper>
  )
}

export default ChatBoxHeader
