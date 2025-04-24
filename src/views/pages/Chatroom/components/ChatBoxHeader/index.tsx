import { Box, IconButton, Typography } from '@mui/material'
import { StyledChatBoxHeaderWrapper } from './styled'
import { useChatContext } from '../../contexts/chat-context'
import ActiveUserModal from '../ActiveUserModal'
import useModal from '../../hooks/use-modal'
import ListAltIcon from '@mui/icons-material/ListAlt'

function ChatBoxHeader() {
  const { chatUsers } = useChatContext()
  const { open, show, hide } = useModal()

  return (
    <>
      <StyledChatBoxHeaderWrapper>
        <Typography variant="h2" component="h1">
          Chat
        </Typography>
        <Box className="user-wrapper">
          <p>Total Online: {chatUsers.length}</p>
          <IconButton onClick={show}>
            <ListAltIcon />
          </IconButton>
        </Box>
      </StyledChatBoxHeaderWrapper>
      <ActiveUserModal open={open} handleClose={hide} items={chatUsers} />
    </>
  )
}

export default ChatBoxHeader
