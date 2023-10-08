import HomeContent from './HomeContent'
import LeftSidebar from './sidebar/LeftSidebar'
import RightSidebar from './sidebar/RightSidebar'

const HomeScreen = () => {
  return (
    <>
      <main className="w-full flex flex-grow basis-auto overflow-auto mt-3 justify-center">
        <div className="grid grid-flow-col space-x-4">
          <LeftSidebar />
          <HomeContent />
          <RightSidebar />
        </div>
      </main>
    </>
  )
}
export default HomeScreen
