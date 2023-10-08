interface RightTabProps {
  name: string
  active?: boolean
  onClick?: any
}

const RightSidebarTab = ({ name, active, onClick }: RightTabProps) => {
  return (
    <>
      <h6
        className={`w-full text-center border-0 border-b-4 border-solid pb-2 text-sm cursor-pointer ${
          active ? 'border-dark' : 'border-light'
        }`}
        onClick={onClick}>
        {name}
      </h6>
    </>
  )
}

export default RightSidebarTab
