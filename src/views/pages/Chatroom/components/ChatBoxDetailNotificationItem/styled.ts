import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxDetailNotificationItemWrapper = styled(Box)(({}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.25rem',
}))

export const StyledChatNotificationBubbleWrapper = styled(Box)(({ theme }) => ({
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
  '& .chat-notification-item': {
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    textAlign: 'center'
  },
}))
