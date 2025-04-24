import { Box, IconButton, List, ListItem, ListItemText, Modal, Typography } from "@mui/material"
import { StyledActiveUserModalWrapper } from "./styled"
import { ChatUser } from "../../../../../types/chat"
import CloseIcon from '@mui/icons-material/Close'

export type ActiveUserModalProps = {
  open: boolean
  handleClose: () => void
  items: ChatUser[]
}

function ActiveUserModal ({
  open,
  handleClose,
  items
}: ActiveUserModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <StyledActiveUserModalWrapper>
        <Box className="header">
          <Typography variant="h4" component="h1">
            Active User
          </Typography>
          <IconButton
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List dense className="list">
          <ListItem className="list-item">
            { 
              items.map((item: ChatUser) => {
                return (
                  <ListItemText
                    key={item.id}
                    primary={item.name}
                  />
                )
              })
            }
          </ListItem>
        </List>
      </StyledActiveUserModalWrapper>
    </Modal>
  )
}

export default ActiveUserModal
