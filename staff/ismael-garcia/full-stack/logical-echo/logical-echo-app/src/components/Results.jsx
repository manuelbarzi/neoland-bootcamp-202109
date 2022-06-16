import { useQueryParams } from '../hooks'
import { useState, useEffect, useContext } from 'react'
import { searchItems, toggleFavItem } from '../logic'
import AppContext from './AppContext'
import logger from '../utils/logger'
import { gsap, ScrollTrigger, Draggable } from '../gsap'
import './Results.css'

function Results({ onItem }) {
    logger.debug('Results -> render')

    const { onFlowStart, onFlowEnd, onModal } = useContext(AppContext)

    const [items, setItems] = useState([])

    const queryParams = useQueryParams()

    const query = queryParams.get('q')

    const { token } = sessionStorage

    useEffect(() => {
        (async () => {
            logger.debug('Results -> useEffect1')
            
            try {
                onFlowStart()

                const items = await searchItems(token, query)

                onFlowEnd()
                    
                setItems(items)
            } catch ({ message }) {
                onFlowEnd()

                onModal(message, 'error')
            }
        })()
    }, [query])

    useEffect(() => {
        logger.debug('Results -> useEffect2')

        // VERSION GSAP DRAGGABLE

        let iteration = 0 // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

        // set initial state of items
        gsap.set('.cards li', {xPercent: 450, scale: 0.5})

        const spacing = 0.2 // spacing of the cards (stagger)

        const snapTime = gsap.utils.snap(spacing) // we'll use this to snapTime the playhead on the seamlessLoop

        const cards = gsap.utils.toArray('.cards li')
            // this function will get called for each element in the buildSeamlessLoop() function, and we just need to return an animation that'll get inserted into a master timeline, spaced

        const animateFunc = element => {
            const tl = gsap.timeline()
            
            tl.fromTo(element, {scale: 0.5}, {
                scale: 1, 
                zIndex: 100, 
                duration: 0.5, 
                yoyo: true, 
                repeat: 1, 
                ease: "power1.in", 
                immediateRender: false
            })
            .fromTo(element, {xPercent: 450}, {
                xPercent: -450, 
                duration: 1, 
                ease: "none", 
                immediateRender: false
            }, 0)
        
            return tl
        }

        const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc)

        const playhead = {offset: 0} // a proxy object we use to simulate the playhead position, but it can go infinitely in either direction and we'll just use an onUpdate to convert it to the corresponding time on the seamlessLoop timeline.

        const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration()) // feed in any offset (time) and it'll return the corresponding wrapped time (a safe value between 0 and the seamlessLoop's duration)

        const scrub = gsap.to(playhead, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
            offset: 0,
            onUpdate() {
                seamlessLoop.time(wrapTime(playhead.offset)) // convert the offset to a "safe" corresponding time on the seamlessLoop timeline
            },
            duration: 0.5,
            ease: "power3",
            paused: true
        })

        const trigger = ScrollTrigger.create({
            start: 0,
            onUpdate(self) {
                let scroll = self.scroll()

                if (scroll > self.end - 1) {
                    wrap(1, 1)
                } else if (scroll < 1 && self.direction < 0) {
                    wrap(-1, self.end - 1)
                } else {
                    scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration()
            
                    scrub.invalidate().restart() // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
                }
            },
            end: "+=3000",
            pin: ".results-gallery"
        })
        
        // converts a progress value (0-1, but could go outside those bounds when wrapping) into a "safe" scroll value that's at least 1 away from the start or end because we reserve those for sensing when the user scrolls ALL the way up or down, to wrap.
        const progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end)

        const wrap = (iterationDelta, scrollTo) => {
            iteration += iterationDelta
            trigger.scroll(scrollTo)
            trigger.update() // by default, when we trigger.scroll(), it waits 1 tick to update().
        }

        // when the user stops scrolling, snap to the closest item.
        ScrollTrigger.addEventListener("scrollEnd", () => scrollToOffset(scrub.vars.offset))

        // feed in an offset (like a time on the seamlessLoop timeline, but it can exceed 0 and duration() in either direction; it'll wrap) and it'll set the scroll position accordingly. That'll call the onUpdate() on the trigger if there's a change.
        function scrollToOffset(offset) { // moves the scroll playhead to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
            let snappedTime = snapTime(offset)
            let progress = (snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration()
            let scroll = progressToScroll(progress)
        
            if (progress >= 1 || progress < 0) {
                return wrap(Math.floor(progress), scroll)
            }
        
            trigger.scroll(scroll)
        }

        function buildSeamlessLoop(items, spacing, animateFunc) {
            let rawSequence = gsap.timeline({paused: true}) // this is where all the "real" animations live
            let seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
                paused: true,
                repeat: -1, // to accommodate infinite scrolling/looping
                onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
                    this._time === this._dur && (this._tTime += this._dur - 0.01)
                },
                onReverseComplete() {
                    this.totalTime(this.rawTime() + this.duration() * 100) // seamless looping backwards
                }
            })
        
            let cycleDuration = spacing * items.length
        
            let dur // the duration of just one animateFunc() (we'll populate it in the .forEach() below...

            // loop through 3 times so we can have an extra cycle at the start and end - we'll scrub the playhead only on the 2nd cycle
            items.concat(items).concat(items).forEach((item, i) => {
                let anim = animateFunc(items[i % items.length])
            
                rawSequence.add(anim, i * spacing)
            
                dur || (dur = anim.duration())
            })

            // animate the playhead linearly from the start of the 2nd cycle to its end (so there will be one "extra" cycle at the beginning and end)
            seamlessLoop.fromTo(rawSequence, {time: cycleDuration + dur / 2}, {
                time: "+=" + cycleDuration,
                duration: cycleDuration,
                ease: "none"
            })
        
            return seamlessLoop
        }


        // below is the dragging functionality (mobile-friendly too)...
        Draggable.create(".drag-proxy", {
            type: "x",
            trigger: ".cards",
            onPress() {
                this.startOffset = scrub.vars.offset
            },
            onDrag() {
                scrub.vars.offset = this.startOffset + (this.startX - this.x) * 0.001
                scrub.invalidate().restart() // same thing as we do in the ScrollTrigger's onUpdate
            },
            onDragEnd() {
                scrollToOffset(scrub.vars.offset)
            }
        })
    }, [])

    const toggleFav = async (item_id) => {
        try {
            onFlowStart()

            if (!token) {
                onModal('Sign in to add favorites to your profile', 'warn')
            } else {
                await toggleFavItem(token, item_id)
    
                setItems(items.map(item => {
                    if (item.item_id === item_id) {
                        return { ...item, isFav: !item.isFav}
                    }
    
                    return item
                }))
    
                onFlowEnd()
            }
        } catch ({ message }) {
            onFlowEnd()

            onModal(message, 'warn')
        }
    }

    return items && items.length ? <>
        <div className='results-gallery'>
            <ul className='cards'>
                {
                    items.map(({ item_id, name, images, price, isFav }) => <li key={item_id}className='results__item clickable' onClick={() => onItem(item_id)}>
                        <div className="card">
                            <img src={images[0]} alt='' />
                            <h2>{name}</h2>
                            {/* <span>{price}</span>
                            <button className='button fav-button clickable' onClick={event => {
                                event.stopPropagation()

                                toggleFav(item_id)
                            }}>{isFav ? '🧡' : '🤍'}</button> */}
                        </div>
                    </li>)
                }
            </ul>
        </div>
        <div className="drag-proxy"></div>
        <p>{`(${items.length})`} Filter</p>
    </>
    :
    null

    {/* <div className="results-gallery">
            <ul className="cards">
                <li>
                    <img className='card-img' src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054010_88.jpg?ts=1642070994249&imwidth=476&imdensity=2" alt='' />
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
        <div className="drag-proxy"></div> */}
}

export default Results