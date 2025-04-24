import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxHeaderWrapper = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .user-wrapper': {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      color: 'white'
    }
  }
}))
