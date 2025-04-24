import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const StyledLoadingOverlayWrapper = styled(Box)(({}) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  right: 0
}))