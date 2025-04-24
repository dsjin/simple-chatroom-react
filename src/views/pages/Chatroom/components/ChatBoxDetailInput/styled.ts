import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxDetailInputWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '60px',
  padding: '10px 20px 10px 20px',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  overflow: 'hidden',
  color: 'black',
  '& .chat-input': {
    margin: '0',
    flexGrow: 1
  }
}))
