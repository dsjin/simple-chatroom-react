import { CircularProgress } from '@mui/material'
import { StyledLoadingOverlayWrapper } from './styled'
import { useChatContext } from '../../contexts/chat-context'

function LoadingOverlay() {
  const { busy } = useChatContext()

  return busy ? (
    <StyledLoadingOverlayWrapper>
      <CircularProgress color="info" />
    </StyledLoadingOverlayWrapper>
  ) : undefined
}

export default LoadingOverlay
