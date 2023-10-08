interface RoundedProfileProps {
  src: string
  className?: string
}

const RoundedProfile = ({ src, ...props }: RoundedProfileProps) => {
  return (
    <img
      {...props}
      className={`w-11 aspect-square rounded-full overflow-hidden cursor-pointer ${props.className}`}
      src={src}
      alt="Profile"
    />
  )
}
export default RoundedProfile
