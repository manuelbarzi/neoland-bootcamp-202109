import useUser from "hooks/useUser"
import { useLocation } from "wouter"

export default function Fav({ id }) {
    const { isLogged, toggleFav } = useUser()

    const [, navigate] = useLocation()

    const handleClick = () => {
        if (!isLogged) return navigate('/login')
        toggleFav(id)
    }

    return <button className="icon" onClick={handleClick}>
        <div className='fas fa-heart fa-2x' role='img' aria-label='Fav'></div>
    </button>
}