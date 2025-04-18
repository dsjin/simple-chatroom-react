import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  height: '90%',
  padding: '1rem',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '2rem',
  [theme.breakpoints.up('md')]: {
    width: '80%'
  }
}))
