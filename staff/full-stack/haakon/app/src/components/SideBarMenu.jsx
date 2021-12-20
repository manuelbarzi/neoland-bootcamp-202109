import './SideBarMenu.sass'

const SideBarMenu = () => {
    return (
        <nav className='sidebarMenu'>
            <div className='sidebarMenu__item'>✖</div>
            <div className='sidebarMenu__item'><a href="#">😎</a></div>
            <div className='sidebarMenu__item'><a href="#">🔩</a></div>
            <div className='sidebarMenu__item'><a href="#">👋</a></div>
        </nav>
    )
}

export default SideBarMenu