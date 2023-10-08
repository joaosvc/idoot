import RoundedProfile from '@/components/RoundedProfile'

interface MessageItemProps {
  name: string
  content: string
  profile: string
  online: boolean
}

const MessageItem = ({ name, content, profile, online }: MessageItemProps) => (
  <div className="flex flex-row items-center h-[3.6rem] rounded-card cursor-pointer hover:bg-light overflow-hidden">
    <div className="relative overflow-hidden m-2">
      <RoundedProfile src={profile} />

      {online && (
        <div
          className="absolute w-[0.8rem] h-[0.8rem] bottom-0 right-0 rounded-full border-3 border-solid border-white
          bg-success"></div>
      )}
    </div>
    <div className="leading-3 m-2">
      <h5 className="text-sm font-medium">{name}</h5>
      <span className="text-[0.8rem] text-gray leading-4">{content}</span>
    </div>
  </div>
)

export default MessageItem
