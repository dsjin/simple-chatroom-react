import { Typography } from "@mui/material"
import { StyledChatBoxHeaderWrapper } from "./styled"
import { useChatContext } from "../../contexts/chat-context"

function ChatBoxHeader () {

  const { chatUsers } = useChatContext()

  return (
    <StyledChatBoxHeaderWrapper>
      <Typography variant="h2" component="h1">
        Chat
      </Typography>
      <p>
        Total Online: { chatUsers.length }
      </p>
    </StyledChatBoxHeaderWrapper>
  )
}

export default ChatBoxHeader
