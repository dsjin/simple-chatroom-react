import ChatBox from './components/ChatBox'
import LoadingOverlay from './components/LoadingOverlay'
import ChatContextProvider from './contexts/chat-context/provider'
import { StyledChatRoom } from './styled'

function Chatroom() {
  return (
    <ChatContextProvider>
      <StyledChatRoom>
        <ChatBox />
        <LoadingOverlay />
      </StyledChatRoom>
    </ChatContextProvider>
  )
}

export default Chatroom
