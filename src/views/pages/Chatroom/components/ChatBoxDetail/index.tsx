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
import { ChatItem, ChatItemType } from '../../../../../types/chat'
import { useEffect } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Delayed from '../Deyaled'
import ChatBoxDetailNoticationItem from '../ChatBoxDetailNotificationItem'

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
          return item.type === ChatItemType.GENERAL ? <ChatBoxDetailItem key={item.id} item={item} /> : <ChatBoxDetailNoticationItem key={item.id} item={item} />
        })}
      </StyledChatBoxDetailInner>
      <ChatBoxDetailInput isBottom={isBottom} setAutoScroll={setAutoScroll} />
      {!autoScroll ? (
        <Delayed
          waitBeforeShow={200}
        >
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
        </Delayed>
      ) : null}
    </StyledChatBoxDetailWrapper>
  )
}

export default ChatBoxDetail
