import { FormControl, IconButton, Input, InputAdornment } from '@mui/material'
import { StyledChatBoxDetailInputWrapper } from './styled'
import SendIcon from '@mui/icons-material/Send'

function ChatBoxDetailInput() {
  return (
    <StyledChatBoxDetailInputWrapper>
      <FormControl className="chat-input" variant="standard">
        <Input
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </StyledChatBoxDetailInputWrapper>
  )
}

export default ChatBoxDetailInput
