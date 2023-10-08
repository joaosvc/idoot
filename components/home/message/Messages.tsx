import MessageItem from './MessageItem'

interface MessagesProps {
  max?: number
  className?: string
}

const messages = [
  {
    name: 'Irina Shayk',
    content: 'Vamos para uma festa amanhã?',
    profile: 'profile/profile-2.jpg',
    online: true
  },
  {
    name: 'Deverson Jose',
    content: '2 Novas mensagens',
    profile: 'profile/profile-4.jpg',
    online: false
  }
]

for (let i = 0; i <= 30; i++) {
  messages.push({
    name: 'Deverson Jose',
    content: '2 Novas mensagens',
    profile: 'profile/profile-4.jpg',
    online: false
  })
}

const Messages = ({ max, ...props }: MessagesProps) => {
  return (
    <>
      <div {...props} className={`max-h-72 overflow-auto space-y-1 pr-2 ${props.className}`}>
        {messages.slice(0, max).map((message, index) => (
          <MessageItem
            key={index}
            name={message.name}
            content={message.content}
            profile={message.profile}
            online={message.online}
          />
        ))}
      </div>
    </>
  )
}

export default Messages
