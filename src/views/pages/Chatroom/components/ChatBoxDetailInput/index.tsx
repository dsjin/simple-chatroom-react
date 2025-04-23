import { FormControl, IconButton, Input, InputAdornment } from '@mui/material'
import { StyledChatBoxDetailInputWrapper } from './styled'
import SendIcon from '@mui/icons-material/Send'
import { useChatContext } from '../../contexts/chat-context'

type ChatBoxDetailInputProps = {
  isBottom: () => boolean
  setAutoScroll: (value: boolean) => void
}

function ChatBoxDetailInput({
  isBottom,
  setAutoScroll
}: ChatBoxDetailInputProps) {

  const { chatText, setChatText, handleSubmitChat } = useChatContext()

  return (
    <StyledChatBoxDetailInputWrapper>
      <FormControl className="chat-input" variant="standard">
        <Input
          value={chatText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setChatText(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => {
                  setAutoScroll(isBottom())
                  handleSubmitChat(chatText)
                }}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              setAutoScroll(isBottom())
              handleSubmitChat(chatText)
            }
          }}
        />
      </FormControl>
    </StyledChatBoxDetailInputWrapper>
  )
}

export default ChatBoxDetailInput
