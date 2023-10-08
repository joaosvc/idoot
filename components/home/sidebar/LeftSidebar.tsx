import { LiaCompass } from 'react-icons/lia'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { TbMessageShare } from 'react-icons/tb'
import { IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineHome } from 'react-icons/ai'
import { GoBookmark } from 'react-icons/go'
import SidebarItem from './SidebarItem'
import RoundedProfile from '@/components/RoundedProfile'

const LeftSidebar = () => {
  return (
    <>
      <div className="h-max w-[16rem] sticky">
        <div className="flex items-center gap-4 w-full p-card bg-white rounded-card">
          <RoundedProfile src="default-profile.jpg" />

          <div>
            <h4 className="font-semibold">João Pedro</h4>
            <p className="text-gray font-normal text-base">@joaosvc</p>
          </div>
        </div>

        <div className="mt-3 bg-white rounded-card">
          <SidebarItem name="Inicio" icon={<AiOutlineHome size={21} />} />
          <SidebarItem name="Explorar" icon={<LiaCompass size={21} />} />
          <SidebarItem
            name="Notificações"
            icon={<IoMdNotificationsOutline size={21} />}
            count={6}
          />
          <SidebarItem name="Mensagens" icon={<TbMessageShare size={21} />} count={3} />
          <SidebarItem name="Favoritos" icon={<GoBookmark size={21} />} />
          <SidebarItem name="Configurações" icon={<IoSettingsOutline size={21} />} />
        </div>

        <label
          className="w-full mt-4 pt-4 pb-4 text-center inline-block p-btn font-medium cursor-pointer rounded-btn duration-300 
          transition-all ease-out hover:opacity-80 text-sm bg-primary text-white">
          Criar Postagem
        </label>
      </div>
    </>
  )
}

export default LeftSidebar
