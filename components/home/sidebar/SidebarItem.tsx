interface SidebarItemProps {
  name: React.ReactNode
  icon: React.ReactNode
  count?: number | null
}

const SidebarItem = ({ name, icon, count }: SidebarItemProps) => {
  return (
    <>
      <a className="flex flex-row items-center h-16 cursor-pointer transition-transform duration-300 ease-in-out hover:bg-light">
        <span className="relative text-gray ml-6">
          {icon}
          {count && (
            <small className="absolute -top-2 -right-2 pt-[0.1rem] pb-[0.1rem] pl-[0.2rem] pr-[0.2rem] bg-danger text-white text-xs rounded-xl">
              +{count}
            </small>
          )}
        </span>
        <h3 className="ml-5 text-base font-semibold">{name}</h3>
      </a>
    </>
  )
}

export default SidebarItem
