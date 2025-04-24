import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material'
import { StyledChatBoxUserInputWrapper } from './styled'
import { useState } from 'react'
import { useChatContext } from '../../contexts/chat-context'
import SendIcon from '@mui/icons-material/Send'
import { v4 as uuidv4 } from 'uuid'

function ChatBoxUserInput() {
  const { handleSubmitChatUser, busy } = useChatContext()
  const [name, setName] = useState<string>('')

  return (
    <StyledChatBoxUserInputWrapper>
      <Typography variant="h2" component="h1">
        Simple Chatroom
      </Typography>
      <FormControl variant="standard" color="secondary" disabled={busy}>
        <InputLabel htmlFor="chat-name-input">Name</InputLabel>
        <Input
          id="chat-name-input"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => {
                  if (!name) {
                    return
                  }
                  handleSubmitChatUser({
                    id: uuidv4(),
                    name,
                  })
                }}
                disabled={busy}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          onKeyDown={e => {
            if (e.key === 'Enter') {
              if (!name) {
                return
              }
              handleSubmitChatUser({
                id: uuidv4(),
                name,
              })
            }
          }}
        />
      </FormControl>
    </StyledChatBoxUserInputWrapper>
  )
}

export default ChatBoxUserInput
