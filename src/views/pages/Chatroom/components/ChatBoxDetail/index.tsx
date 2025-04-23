import {
  StyledChatBoxDetailInner,
  StyledChatBoxDetailWrapper,
  StyledScrollToBottomButtonWrapper,
  StyledScrollToBottomButton,
} from './styled'
import ChatBoxDetailItem from '../ChatBoxDetailItem'
import ChatBoxDetailInput from '../ChatBoxDetailInput'
import useScroll from '../../hooks/use-scroll'
import { useChatContext } from '../../contexts/chat-context'
import { ChatItem } from '../../../../../types/chat'
import { useEffect } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function ChatBoxDetail() {
  const { elementRef, toBottom, isBottom, autoScroll, setAutoScroll } =
    useScroll()

  const { chats } = useChatContext()

  useEffect(() => {
    if (autoScroll) {
      toBottom()
    }
  }, [chats])

  return (
    <StyledChatBoxDetailWrapper>
      <StyledChatBoxDetailInner ref={elementRef}>
        {chats.map((item: ChatItem) => {
          return <ChatBoxDetailItem key={item.id} item={item} />
        })}
      </StyledChatBoxDetailInner>
      <ChatBoxDetailInput isBottom={isBottom} setAutoScroll={setAutoScroll} />
      {!autoScroll ? (
        <StyledScrollToBottomButtonWrapper>
          <StyledScrollToBottomButton
            variant="contained"
            color="info"
            endIcon={<ArrowDownwardIcon />}
            onClick={toBottom}
          >
            To Bottom
          </StyledScrollToBottomButton>
        </StyledScrollToBottomButtonWrapper>
      ) : null}
    </StyledChatBoxDetailWrapper>
  )
}

export default ChatBoxDetail
