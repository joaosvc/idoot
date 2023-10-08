import Header from '@/components/Header'
import HomeScreen from '@/components/home/HomeScreen'

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <HomeScreen />
      </div>
    </>
  )
}
