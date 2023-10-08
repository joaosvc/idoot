'use client'

import { FaRegEdit } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import Messages from '../message/Messages'
import RightSidebarTab from './RightSidebarTab'
import { useState } from 'react'
import Requests from '../request/Requests'

const RightSidebar = () => {
  const SIDE_TAB_MAIN = 'Principal'
  const SIDE_TAB_GENERAL = 'Geral'
  const SIDE_TAB_REQUESTS = 'Solicitações'

  const [activeTab, setActiveTab] = useState(SIDE_TAB_MAIN)

  const CurrentTabContent = () => {
    switch (activeTab) {
      case SIDE_TAB_MAIN:
      default:
        return <Messages className="max-h-[27rem]" />
      case SIDE_TAB_REQUESTS:
        return <Requests className="max-h-[27rem]" />
      case SIDE_TAB_GENERAL:
        return (
          <div className="flex items-center justify-center h-10">
            <span>Nada aqui, por enquanto...</span>
          </div>
        )
    }
  }

  return (
    <>
      <div className="h-max w-[20rem] sticky">
        <div className="bg-white rounded-card p-card">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold">Mensagens</h4>
            <div className="cursor-pointer">
              <FaRegEdit size={19} />
            </div>
          </div>

          <div className="mb-4 flex flex-row bg-light rounded-btn p-3">
            <label htmlFor="search">
              <BiSearch size={20} className="cursor-pointer ml-1" />
            </label>
            <input
              className="bg-transparent w-[30vw] ml-4 text-dark text-sm placeholder-gray"
              type="search"
              id="message-search"
              placeholder={
                activeTab === SIDE_TAB_GENERAL ? 'Procurar contato' : 'Procurar mensagem'
              }
            />
          </div>

          <div className="flex justify-between mb-4">
            <RightSidebarTab
              name="Principal"
              active={activeTab === SIDE_TAB_MAIN}
              onClick={() => setActiveTab(SIDE_TAB_MAIN)}
            />
            <RightSidebarTab
              name="Geral"
              active={activeTab === SIDE_TAB_GENERAL}
              onClick={() => setActiveTab(SIDE_TAB_GENERAL)}
            />
            <RightSidebarTab
              name="Solicitações"
              active={activeTab === SIDE_TAB_REQUESTS}
              onClick={() => setActiveTab(SIDE_TAB_REQUESTS)}
            />
          </div>

          <div className="w-full h-auto">
            <CurrentTabContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSidebar
