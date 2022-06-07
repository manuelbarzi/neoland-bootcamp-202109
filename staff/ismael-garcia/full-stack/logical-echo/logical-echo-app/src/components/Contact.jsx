import { useEffect } from 'react'
import gsap from 'gsap'
import toPX from './helpers/to-px'
import { CustomEase } from 'gsap/CustomEase'
import logger from '../utils/logger'
import './Contact.css'

gsap.registerPlugin(CustomEase)

function Contact() {
    logger.debug('Contact -> render')

    CustomEase.create('custom_one', '.77,0,.175,1')

    useEffect(() => {
        let tl = gsap.timeline()

        tl.to('.le', {opacity: 1, x: 0, duration: .91, ease: 'custom_one'})
        tl.from('.contact-info', {x: 50, duration: .91, ease: 'custom_one'}, '<')
        tl.from('.contact-image--outer', {left: toPX('110vw'), duration: 1, ease: 'custom_one'})        
    }, [])
    
    return <div className="contact">
        <article className="contact-info">
            <p>
                <strong>Logical Echo S.A.</strong>
                <br />
                Address Street 1, 1A
                <br />
                18007 - City
                <br />
                <a href="#" className="phone clickable">+34 600000000</a>
            </p>

            <div className="social">
                <p>
                    <strong>Contact</strong>
                    <br />
                    <a href="#" className="email clickable">mail@name.com</a>
                </p>
                <p>
                    <strong>Socials</strong>
                    <br />
                    <a href="#" className='clickable'>Instagram</a>
                    <br />
                    <a href="#" className='clickable'>Twitter</a>
                </p>
            </div>
        </article>
        <div className="contact-image--outer big type-a">
            <div className="image" data-ratex="1">
                <img className="contact-img" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" /> 
            </div>
        </div>
    </div>
}

export default Contact