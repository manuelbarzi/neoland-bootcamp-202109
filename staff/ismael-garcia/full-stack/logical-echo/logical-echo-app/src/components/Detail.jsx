import { useState, useEffect, useContext, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveItem, toggleFavItem } from '../logic'
import { gsap, ScrollTrigger, CustomEase } from '../gsap'
import AppContext from './AppContext'
import logger from '../utils/logger'
import './Detail.css'

function Detail() { 
    logger.debug('Detail -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [item, setItem] = useState()

    // const images_refs = useRef([])
    // console.log(images_refs)

    const { item_id } = useParams()

    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    const { token } = sessionStorage

    CustomEase.create('custom_one', '.77,0,.175,1')

    // useEffect 1: calling the retrieveItem function and setting the item state 
    useEffect(() => {
        (async () => {
            logger.debug('Detail -> useEffect1')

            try {
                onFlowStart()

                const item = await retrieveItem(token, item_id) 

                onFlowEnd()

                setItem(item)     
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'error')
            }
        })()
    }, [item_id])

    // useEffect 2: lighting up LE component
    useEffect(() => {
        logger.debug('Detail -> useEffect2')

        gsap.to('.le', {opacity: 1, x: 0, duration: .91, ease: 'custom_one'})
    }, [])

    // useEffect 3: setting the layout based on refs
    // useEffect(() => {
    //     logger.debug('Detail -> useEffect3')

    //     const first_image_left_vw = 65

    //     images_refs.current.length ?? images_refs.current.forEach((image, i) => {
    //         if (i === 0) {
    //             image.setAttribute('left', `${first_image_left_vw}vw`)
    //         } else {
    //             image.setAttribute('left', `${first_image_left_vw + (i * 60)}vw`)
    //         }
    //     })
    // }, [images_refs.current])

    // const addToRefs = (el) => {
    //     if (el && !images_refs.current.includes(el)) {
    //         images_refs.current.push(el)
    //     }
    // }

    // useEffect 3: gsap scrollTrigger animation
    useEffect(() => {
        logger.debug('Detail -> useEffect3')
        let images = gsap.utils.toArray(".detail-image")

        let scrollTween = gsap.to('.detail__gallery', {
            xPercent: -100,
            ease: "none", // <-- IMPORTANT!
            scrollTrigger: {
                trigger: ".detail__horizontal",
                pin: true,
                scrub: 0.1,
                end: "+=3000"
            }
        })

        // ScrollTrigger.defaults({ markers: {startColor: "white", endColor: "white" }})

        images.forEach((image, i) => {
            if (i !== 0) {
                gsap.set(image, { scale: .5 })

                gsap.to(image, {
                    scale: 1,
                    duration: .1,
                    ease: "none",
                    transformOrigin: '0 100%',
                    scrollTrigger: {
                        trigger: image,
                        containerAnimation: scrollTween,
                        start: "left 90%",
                        end: "left 10%",
                        scrub: true,
                        id: i
                    }
                })
            }

            gsap.to(image, {
                scale: .5,
                duration: .1,
                ease: "none",
                transformOrigin: '0 100%',
                immediateRender: false,
                scrollTrigger: {
                    trigger: image,
                    containerAnimation: scrollTween,
                    start: "left 10%",
                    // end: "center 10%",
                    scrub: true,
                    id: i
                }
            })
        })

    }, [item])

    const toggleFav = async (item_id) => {
        try {
            if (!token) {
                onModal('Sign in to add favorites to your profile', 'warn')
            } else {
                onFlowStart()
                
                await toggleFavItem(token, item_id)
    
                setItem({ ...item, isFav: !item.isFav })
    
                onFlowEnd()
            }
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'error')
        }
    }

    return item ? <>
        <div className="detail__horizontal">
            {/* <button type="button" className="button button--medium clickable" onClick={() => goBack()}>Back to Results</button> */}
    
            <div className="detail__gallery">
                {
                    item.images.map((src, i) => <div className="detail-image" key={i}>
                        <img src={src} alt="" />
                    </div>)
                }
            </div>

            <div className="detail__info">
                <h3 className="detail-name">{item.name}</h3>
                <p className="detail-description">{item.description}</p>
                <span className="detail-price"><span>{item.price}</span></span>
                <span className="detail-colors"><span>Colors: {item.colors}</span></span>
                <a href={item.url} className="detail-link">Visit the shop</a>
                <div className="detail-favs">
                    Save in Favs
                    <button type='button' className='button fav-button clickable' onClick={() => toggleFav(item.item_id)}>{item.isFav ? '🧡' : '🤍'}</button>
                </div>
            </div>
        </div>
    </>
    :
    null
}

export default Detail