import ChatBox from './components/ChatBox'
import ChatContextProvider from './contexts/chat-context'
import { StyledChatRoom } from './styled'

function Chatroom() {
  return (
    <ChatContextProvider>
      <StyledChatRoom>
        <ChatBox />
      </StyledChatRoom>
    </ChatContextProvider>
  )
}

export default Chatroom
