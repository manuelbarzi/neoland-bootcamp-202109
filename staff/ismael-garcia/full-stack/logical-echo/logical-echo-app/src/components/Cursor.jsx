import { useEffect } from 'react'
import { gsap } from 'gsap'
import logger from '../utils/logger'
import './Cursor.css'

function Cursor() {
    logger.debug('Cursor -> render')

    const clickables = document.querySelectorAll('.clickable')

    useEffect(() => {
        logger.debug('Cursor -> useEffect')

        const bigBall = document.querySelector('.cursor__ball--big')
        const smallBall = document.querySelector('.cursor__ball--small')

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
            gsap.to(bigBall, {
                duration: .4,
                x: e.pageX - 15,
                y: e.pageY - 15
            })

            gsap.to(smallBall, {
                duration: .1,
                x: e.pageX - 5,
                y: e.pageY - 7
            })
          }

        const onMouseHover = () => {
            gsap.to(bigBall, {
                duration: .3,
                scale: 2.5
            })
          }
          
        const onMouseHoverOut = () => {
            gsap.to(bigBall, {
                duration: .3,
                scale: 1
            })
        }

        const onMouseDown = () => {
            gsap.to(bigBall, {
                duration: .3,
                scale: 1.5
            })
        }

        const onMouseUp = () => {
            gsap.to(bigBall, {
                duration: .3,
                scale: 2.5
            })
        }

        addEventListeners()
        return () => removeEventListeners()
    }, [clickables])
    
    return <>
        <div className="cursor">
            <div className="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
                </svg>
            </div>
            
            <div className="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
                </svg>
            </div>
        </div>
    </>
}

export default Cursor