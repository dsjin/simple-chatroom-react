import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledChatBoxDetailWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  flexGrow: '1',
  borderBottomLeftRadius: '2rem',
  borderBottomRightRadius: '2rem',
  backgroundColor: theme.palette.primary.light,
  scrollbarWidth: 'thin',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
}))

export const StyledChatBoxDetailInner = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  padding: '1rem',
  boxSizing: 'border-box'
}))
