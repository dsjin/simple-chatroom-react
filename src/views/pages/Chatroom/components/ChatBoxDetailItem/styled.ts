import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxDetailItemWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&.left': {
    alignItems: 'flex-start'
  },
  '&.right': {
    alignItems: 'flex-end'
  }
}))
