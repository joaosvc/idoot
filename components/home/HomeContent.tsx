import Stories from './stories/Stories'
import CreateStory from './stories/CreateStory'
import Feeds from './feed/Feeds'

const HomeContent = () => {
  return (
    <>
      <div className="w-[34rem] pr-3 overflow-auto">
        <Stories />
        <CreateStory />
        <Feeds />
      </div>
    </>
  )
}

export default HomeContent
