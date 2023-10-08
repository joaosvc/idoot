import { BiSearch } from 'react-icons/bi'
import RoundedProfile from './RoundedProfile'

const Header = () => {
  return (
    <>
      <header>
        <nav className="w-full flex flex-grow basis-auto bg-white">
          <div className="flex items-center justify-between m-auto w-full sm:w-4/5 p-3">
            <div>
              <span className="font-semibold text-lg">Idoot</span>
            </div>

            <div className="flex flex-row bg-light rounded-btn p-search">
              <label htmlFor="search">
                <BiSearch size={19} className="cursor-pointer" />
              </label>
              <input
                className="bg-transparent w-[24vw] sm:w-[30vw] ml-3 text-dark text-sm"
                type="search"
                id="search"
                placeholder="Pesquisar por criadores, inspirações e projetos"
              />
            </div>

            <div className="flex flex-row items-center space-x-3">
              <span className="font-semibold cursor-pointer">Perfil</span>
              <RoundedProfile src="default-profile.jpg" />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
