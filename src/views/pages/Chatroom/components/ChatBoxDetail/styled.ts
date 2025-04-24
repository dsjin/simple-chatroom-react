import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'

export const StyledChatBoxDetailWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
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

export const StyledChatBoxDetailInner = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollbarWidth: 'thin',
  padding: '1rem',
  boxSizing: 'border-box'
}))

export const StyledScrollToBottomButtonWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  bottom: 5rem;
  display: flex;
  justify-content: center;,
  boxSizing: 'border-box'
`

export const StyledScrollToBottomButton = styled(Button)`
  border-radius: 2rem
`
