import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledActiveUserModalWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '40%',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  padding: '1rem',
  borderRadius: '1rem',
  [theme.breakpoints.up('md')]: {
    width: '50%',
    height: '50%',
  },
  '& .list-item': {
    alignItems: 'flex-start',
    flexDirection: 'column'
  }
}))
