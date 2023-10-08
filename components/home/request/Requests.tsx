import Request from './Request'

interface RequestsProps {
  max?: number
  className?: string
}

const requests = [
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  },
  {
    name: 'Irina Shayk',
    profile: 'profile/profile-2.jpg',
    content: '8 amigos em comum'
  }
]

const Requests = ({ max, ...props }: RequestsProps) => {
  return (
    <>
      <div {...props} className={`max-h-72 overflow-auto space-y-1 pr-2 ${props.className}`}>
        {requests.map((request, index) => (
          <Request
            key={index}
            name={request.name}
            profile={request.profile}
            content={request.content}
          />
        ))}
      </div>
    </>
  )
}

export default Requests
