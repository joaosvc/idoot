interface StoryProps {
  name: string
  profile: string
  image: string
}

const Story = ({ name, profile, image }: StoryProps) => (
  <div
    className={`flex flex-col justify-between items-center w-28 text-white text-xs relative 
      overflow-hidden p-card rounded-card bg-no-repeat bg-center bg-cover before:content-[''] before:block before:w-full before:h-20
      before:bottom-0 before:bg-gradient-to-b before:from-transparent before:to-[rgba(0,0,0,0.75)] 
      before:absolute`}
    style={{ backgroundImage: `url(${image})` }}>
    <div className="aspect-square rounded-full overflow-hidden cursor-pointer w-8 h-8 items-start border-2 border-solid border-primary">
      <img src={profile} alt="Profile Image" />
    </div>
    <span className="z-10">{name}</span>
  </div>
)

export default Story
