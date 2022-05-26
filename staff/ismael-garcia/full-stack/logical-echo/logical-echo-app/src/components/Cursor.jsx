import { useEffect } from 'react'
import logger from '../utils/logger'
import './Cursor.css'

function Cursor() {
    logger.debug('Cursor -> render')

    useEffect(() => {
        logger.debug('Cursor -> useEffect')

        const clickables = document.querySelectorAll('.clickable')
        const bigBall = document.querySelector('.ball--big')
        const smallBall = document.querySelector('.ball--small')

        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove)

            for (let i = 0; i < clickables.length; i++) {
                clickables[i].addEventListener('mouseenter', onMouseHover)
                clickables[i].addEventListener('mouseleave', onMouseHoverOut)
                clickables[i].addEventListener('mousedown', onMouseDown)
                clickables[i].addEventListener('mouseup', onMouseUp)
            }
        }

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove)

            for (let i = 0; i < clickables.length; i++) {
                clickables[i].removeEventListener('mouseenter', onMouseHover)
                clickables[i].removeEventListener('mouseleave', onMouseHoverOut)
                clickables[i].removeEventListener('mousedown', onMouseDown)
                clickables[i].removeEventListener('mouseup', onMouseUp)
            }
        }

        const onMouseMove = (e) => {
            bigBall.setAttribute("style", "top: "+(e.pageY - window.pageYOffset - 15)+"px; left: "+(e.pageX - 15)+"px;")
            smallBall.setAttribute("style", "top: "+(e.pageY - window.pageYOffset - 7)+"px; left: "+(e.pageX - 5)+"px;")
            // bigBall.style.top = `${e.pageY - window.pageYOffset - 15}px;`
            // bigBall.style.left = `${e.pageX - 15}px;`
            // smallBall.style.top = `${e.pageY - window.pageYOffset - 7}px;`
            // smallBall.style.left = `${e.pageX - 5}px;`
        }

        const onMouseHover = () => {
            bigBall.classList.add('on-hover')
        }
          
        const onMouseHoverOut = () => {
            bigBall.classList.remove('on-hover')
        }

        const onMouseDown = () => {
            bigBall.classList.add('on-click')
        }

        const onMouseUp = () => {
            bigBall.classList.remove('on-click')
        }

        addEventListeners()
        return () => removeEventListeners()
    }, [])
    
    return <>
        <div className="cursor">
            <div className="cursor__ball ball--big ">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" strokeWidth='0'></circle>
                </svg>
            </div>
            
            <div className="cursor__ball ball--small">
                <svg height="10" width="10">
                    <circle cx="5" cy="5" r="3" strokeWidth='0'></circle>
                </svg>
            </div>
        </div>
    </>
}

export default Cursor