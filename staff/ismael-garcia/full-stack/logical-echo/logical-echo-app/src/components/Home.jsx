import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logger from '../utils/logger'
import './Home.css'
import Navbar from './Navbar'
import Logo from './Logo'
import HamburgerLine from './HamburgerLine'
import BrandFooter from './BrandFooter'
import Search from './Search'
import Account from './Account'
import Profile from './Profile'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Description from './Description'


function Home() {
    logger.debug('Home -> render')

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        logger.debug('Home -> useEffect')

        // Event listeners
        const addEventListeners = () => {
            document.addEventListener('scroll', scrollHorizontally)
            document.addEventListener('scroll', scaleCoverImage)
            document.addEventListener('scroll', toggleHomeElementsToShow)
        }

        const removeEventListeners = () => {
            document.removeEventListener('scroll', scrollHorizontally)
            document.removeEventListener('scroll', scaleCoverImage)
            document.removeEventListener('scroll', toggleHomeElementsToShow)
        }

        // Horizontal scroll
        let sticky_parent = document.querySelector('.sticky-parent')
        let sticky = document.querySelector('.sticky')

        const scroll_width = sticky.scrollWidth
        const vertical_scroll_height = sticky_parent.getBoundingClientRect().height - sticky.getBoundingClientRect().height

        const scrollHorizontally = () => {
            //Checking whether the sticky element has entered into view or not
            let sticky_position = sticky.getBoundingClientRect().top

            if (sticky_position > 1) {
                return
            } else {
                let scrolled = -sticky_parent.getBoundingClientRect().top // negative number negated to make it positive

                sticky.scrollLeft = (scroll_width / vertical_scroll_height) * (scrolled) * 0.85
            }
        }

        // Scaling cover image when scrolling
        let cover_image = document.querySelector('.cover-image')

        const scaleCoverImage = () => {
            let scrolled = -sticky_parent.getBoundingClientRect().top

            let scale_ratio = (100 - scrolled/8)/100
            let scale_value = scale_ratio >= 0.5 ? scale_ratio : 0.5

            cover_image.style.transform = 'scale(' + scale_value + ')'
            cover_image.style.transformOrigin = '0 100%'
        }

        // Toggling elements to show when scrolling
        let navbar = document.querySelector('.navbar')
        let hamburger_line = document.querySelector('.hamburger-line')
        let logo = document.querySelector('.logo')
        let brand_footer = document.querySelector('.brand-footer')
        let home_images_cover = document.querySelectorAll('.home__image.mango')
        let elems_to_show_on_scroll = [navbar, brand_footer, home_images_cover]
        let elems_to_hide_on_scroll = [logo, hamburger_line]
        // console.log(elems_to_show_on_scroll)
        // console.log(elems_to_hide_on_scroll)

        const checkIsArrayLike = (elem) => {
            return elem instanceof Array || NodeList.prototype.isPrototypeOf(elem) || HTMLCollection.prototype.isPrototypeOf(elem)
        }

        const toggleHomeElementsToShow = () => {
            let scrolled = -sticky_parent.getBoundingClientRect().top

            if (scrolled > 0) {
                elems_to_show_on_scroll.forEach(elem => {
                    if (checkIsArrayLike(elem)) {
                        elem.forEach(el => {
                            el.classList.add('show')
                        })
                    } else {
                        elem.classList.add('show')
                    }
                })

                elems_to_hide_on_scroll.forEach(elem => {
                    if (checkIsArrayLike(elem)) {
                        elem.forEach(el => {
                            el.classList.remove('show')
                        })
                    } else {
                        elem.classList.remove('show')
                    }
                })
            } else {
                elems_to_hide_on_scroll.forEach(elem => {
                    if (checkIsArrayLike(elem)) {
                        elem.forEach(el => {
                            el.classList.add('show')
                        })
                    } else {
                        elem.classList.add('show')
                    }
                })

                elems_to_show_on_scroll.forEach(elem => {
                    if (checkIsArrayLike(elem)) {
                        elem.forEach(el => {
                            el.classList.remove('show')
                        })
                    } else {
                        elem.classList.remove('show')
                    }
                })
            }
        }

        // Intro Home Page
        const startLogo = () => {
            logo.classList.add('show')
        }

        const startHamburgerLine = () => {
            hamburger_line.classList.add('show')
        }

        function showHomeElements() {
            startLogo()
            window.setTimeout(startHamburgerLine, 3000)
        }

        showHomeElements()

        // Creating Intersection Observer to change BrandFooter
        let io_targets = document.querySelectorAll('.io-target')
        let text_to_change = document.querySelector('.brand-footer__text')
        let brands = ['Mango', 'H&M', 'Zara']
        let i = 0

        const handleIntersection = (entries) => {
            let entry = entries[0]

            if (entry.boundingClientRect.right < 0 && entry.boundingClientRect.left < 0) {
                i++         
                brand_footer.classList.remove('show')
                text_to_change.textContent = brands[i]
                brand_footer.classList.add('show')
            } 
            
            if (entry.boundingClientRect.right >= 0 && entry.boundingClientRect.left < 0) {
                i--         
                brand_footer.classList.remove('show')
                text_to_change.textContent = brands[i]
                brand_footer.classList.add('show')
            }
        }

        function createObserver(target) {          
            let options = {
              root: null,
              rootMargin: "0px",
              threshold: 0
            }
          
            let io = new IntersectionObserver(handleIntersection, options)

            if (checkIsArrayLike(target)) {
                target.forEach(elem => io.observe(elem))
            } else {
                io.observe(target)
            }
        }

        createObserver(io_targets)

        // Adding and removing Event Listeners
        addEventListeners()
        return () => removeEventListeners()
    }, [])

    const goToStore = store => navigate(`/items?q=${store}`)

    return <>
        {/* <div classNameName="home-wrapper">
            <h1 className='home__motto fade-in'>Be conscious! Be committed!</h1>
            <h2 className='home__description fade-in'>Discover the sustainable collections of your beloved brands.</h2>
            
        </div> */}
        {/* <div className="vertical first">
            
        </div> */}

        <div className="sticky-parent">
            <div className="sticky">
                <div className="horizontal">
                    <Navbar />
                    <Logo />
                    <HamburgerLine />
                    <BrandFooter />
                    {location.pathname === '/search' && <Search />}
                    {location.pathname === '/account' && <Account />}
                    {location.pathname === '/profile' && <Profile />}
                    {location.pathname === '/newsletter' && <Newsletter />}

                    <div className="dim one"></div>

                    <div className="dif two">
                        <img src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054010_88.jpg?ts=1642070994249&imwidth=476&imdensity=2" alt="" className="cover-image cover__slide-in clickable" onClick={() => goToStore('Mango')} />
                        <img src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" className="home__image big mango clickable" onClick={() => goToStore('Mango')} />
                        <img src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27040091_56.jpg?ts=1636379500926&imwidth=360&imdensity=2" alt="" className="home__image small mango io-target clickable" onClick={() => goToStore('Mango')} />
                    </div>

                    <div className="dim three"></div>

                    <div className="dif four">
                        <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Ff3%2Fdef33b7fc423c73869aab4bfaa03545eb06cbe97.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" className="home__image big hm clickable" onClick={() => goToStore('HM')} />
                        <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F66%2F0e6697cc83741f06914b330f87070ebd98bf0e7f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="" className="home__image medium hm io-target clickable" onClick={() => goToStore('HM')} />
                        <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5d%2F15%2F5d15e6f0e77ff342a1e765a0ab3886db5d8f2284.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" className="home__image small hm clickable" onClick={() => goToStore('HM')} />
                    </div>

                    <div className="dim five"></div>

                    <div className="dif six">
                        <img src="https://static.zara.net/photos///2022/V/0/1/p/2183/049/500/2/w/1126/2183049500_2_1_1.jpg?ts=1645708543111" alt="" className="home__image big zara clickable" onClick={() => goToStore('Zara')} />
                        <img src="https://static.zara.net/photos///2022/V/0/1/p/0034/042/621/2/w/1126/0034042621_2_1_1.jpg?ts=1649062243737" alt="" className="home__image medium zara io-target clickable" onClick={() => goToStore('Zara')} />
                        <img src="https://static.zara.net/photos///2022/V/0/2/p/5692/340/710/2/w/1126/5692340710_2_1_1.jpg?ts=1644943727722" alt="" className="home__image small zara clickable" onClick={() => goToStore('Zara')} />
                    </div>
                    
                    <div className="dim seven">
                        <Description />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home