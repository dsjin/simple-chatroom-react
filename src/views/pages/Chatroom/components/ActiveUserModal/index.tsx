import { List, ListItem, ListItemText, Modal, Typography } from "@mui/material"
import { StyledActiveUserModalWrapper } from "./styled"
import { ChatUser } from "../../../../../types/chat"

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
      open={true}
      onClose={handleClose}
    >
      <StyledActiveUserModalWrapper>
        <Typography variant="h4" component="h1">
          Active User
        </Typography>
        <List dense>
          <ListItem className="list-item">
            { 
              [
                ...items,
                {
                  id: 'test',
                  name: 'test'
                },
                {
                  id: 'test',
                  name: 'test'
                },
                {
                  id: 'test',
                  name: 'test'
                },
                {
                  id: 'test',
                  name: 'test'
                }
              ].map((item: ChatUser) => {
                return (
                  <ListItemText
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
