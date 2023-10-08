import RoundedProfile from '@/components/RoundedProfile'

interface RequestProps {
  name: string
  profile: string
  content: string
}

const Request = ({ name, profile, content }: RequestProps) => {
  return (
    <>
      <div className="bg-white p-1 rounded-card hover:bg-light">
        <div className="flex flex-row items-center ml-2 overflow-hidden">
          <RoundedProfile src={profile} />

          <div className="leading-3 m-2">
            <h5 className="text-sm font-medium">{name}</h5>
            <p className="text-[0.8rem] text-gray leading-4">{content}</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 p-2">
          <button
            className="inline-block p-btn font-medium cursor-pointer rounded-btn duration-300 
transition-all ease-out hover:opacity-80 text-xs bg-primary text-white">
            Aceitar
          </button>
          <button
            className="inline-block p-btn font-medium cursor-pointer rounded-btn duration-300 
transition-all ease-out hover:opacity-80 text-xs bg-light text-dark">
            Recusar
          </button>
        </div>
      </div>
    </>
  )
}

export default Request
