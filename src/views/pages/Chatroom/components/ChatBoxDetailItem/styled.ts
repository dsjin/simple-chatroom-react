import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxDetailItemWrapper = styled(Box)(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&.left': {
    alignItems: 'flex-start',
  },
  '&.right': {
    alignItems: 'flex-end',
  },
  '& .chat-detail-item-name': {
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
  },
}))

export const StyledChatBubbleWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '1rem',
  color: 'black',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  maxWidth: '80%',
  overflowWrap: 'break-word',
  [theme.breakpoints.up('md')]: {
    maxWidth: '50%',
  },
}))
