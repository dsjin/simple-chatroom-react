import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxUserInputWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& h1': {
    marginBottom: '2rem',
    fontSize: '2.5rem'
  },
  [theme.breakpoints.up('md')]: {
    '& h1': {
      fontSize: '3.75rem'
    }
  },
}))