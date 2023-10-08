import Story from './Story'

const Stories = () => {
  return (
    <>
      <div className="h-48 grid grid-flow-col space-x-2 overflow-hidden">
        <Story name="Seu Story" profile="profile/profile-1.jpg" image="stories/story-1.jpg" />
        <Story name="Doutzen Kroes" profile="profile/profile-2.jpg" image="stories/story-1.jpg" />
        <Story name="Irina Shayk" profile="profile/profile-3.jpg" image="stories/story-1.jpg" />
        <Story name="Deverson Jose" profile="profile/profile-4.jpg" image="stories/story-1.jpg" />
        <Story name="Carla Bernades" profile="profile/profile-5.jpg" image="stories/story-1.jpg" />
        <Story name="Carla Bernades" profile="profile/profile-5.jpg" image="stories/story-1.jpg" />
        <Story name="Carla Bernades" profile="profile/profile-5.jpg" image="stories/story-1.jpg" />
      </div>
    </>
  )
}

export default Stories
