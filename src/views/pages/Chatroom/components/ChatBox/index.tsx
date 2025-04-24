import { StyledChatBoxWrapper } from './styled'
import ChatBoxHeader from '../ChatBoxHeader'
import ChatBoxDetail from '../ChatBoxDetail'
import { useChatContext } from '../../contexts/chat-context'
import ChatBoxUserInput from '../ChatBoxUserInput'

function ChatBox() {
  const { init, busy } = useChatContext()

  return (
    <StyledChatBoxWrapper className={busy ? 'busy' : undefined}>
      {init ? (
        <>
          <ChatBoxUserInput />
        </>
      ) : (
        <>
          <ChatBoxHeader />
          <ChatBoxDetail />
        </>
      )}
    </StyledChatBoxWrapper>
  )
}

export default ChatBox
