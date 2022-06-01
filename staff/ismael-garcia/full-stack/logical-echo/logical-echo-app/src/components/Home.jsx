import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import logger from '../utils/logger'
import scrollHorizontally from './helpers/scroll-horizontally'
import changePageWheelSpeed from './helpers/change-page-wheel-speed'
import checkIsArrayLike from './helpers/check-is-array-like'
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

    const brands = ['Mango', 'HM', 'Zara']

    // useEffect for Intro Home Page
    useEffect(() => {
        logger.debug('Home -> useEffect1')

        let hamburger_line = document.querySelector('.hamburger-line')
        let logo = document.querySelector('.logo')
        let cover_image = document.querySelector('.cover-image--outer')

        function startHome() {
            logo.classList.add('show')
            window.setTimeout(() => {
                logo.classList.add('left')
                cover_image.classList.add('left')
            }, 2200)
            window.setTimeout(() => hamburger_line.classList.add('show'), 3000)
        }

        startHome()
    }, [])


    // useEffect for Scroll and Wheel
    useEffect(() => {
        logger.debug('Home -> useEffect2')

        const addEventListeners = () => {
            document.addEventListener('scroll', setHorizontalScroll)
            document.addEventListener('scroll', scaleOnScroll)
            document.addEventListener('scroll', toggleElementsToShow)
            document.addEventListener('scroll', delayXOnScroll)
        }

        const removeEventListeners = () => {
            document.removeEventListener('scroll', setHorizontalScroll)
            document.removeEventListener('scroll', scaleOnScroll)
            document.removeEventListener('scroll', toggleElementsToShow)
            document.removeEventListener('scroll', delayXOnScroll)
        }

        // Horizontal scroll
        let sticky_parent = document.querySelector('.sticky-parent')
        let sticky = document.querySelector('.sticky')
        
        const setHorizontalScroll = () => {
            scrollHorizontally(sticky, sticky_parent)
        }

        // Scaling and translating cover image on scroll
        // let scale_target = document.querySelector('.cover-image--outer')
        // let scale_target_inner = document.querySelector('.cover-image--outer div')

        const scaleOnScroll = () => {
            let scrolled = document.documentElement.scrollTop ?? document.body.scrollTop

            let scale_rate = (100 - scrolled/5)/100 
            let scale_value = scale_rate >= 0.5 ? scale_rate : 0.5

            gsap.to('.cover-image--outer', {
                duration: .1,
                scale: scale_value,
                transformOrigin: '0 100%'
            })

            // scale_target.style.transform = `scale(${scale_value})`
            // scale_target.style.transformOrigin = '0 100%'

            // if (scrolled < 1) {
            //     scale_target_inner.transform = 'translate3d(0px, 0px, 0px);'
            // }
        }

        // Toggling elements to show on scroll
        let navbar = document.querySelector('.navbar')
        let hamburger_line = document.querySelector('.hamburger-line')
        let logo = document.querySelector('.logo')
        let brand_footer = document.querySelector('.brand-footer')
        let images_type_a = document.querySelectorAll('.image--outer.type-a')
        let show_on_scroll_target = [navbar, brand_footer, images_type_a]
        let hide_on_scroll_target = [logo, hamburger_line]

        const toggleElementsToShow = () => {
            let scrolled = -sticky_parent.getBoundingClientRect().top

            if (scrolled > 0) {
                show_on_scroll_target.forEach(elem => {
                    let is_array_like = checkIsArrayLike(elem)

                    if (is_array_like) {
                        elem.forEach(el => {
                            el.classList.add('show')
                        })
                    } else {
                        elem.classList.add('show')
                    }
                })

                hide_on_scroll_target.forEach(elem => {
                    let is_array_like = checkIsArrayLike(elem)

                    if (is_array_like) {
                        elem.forEach(el => {
                            el.classList.remove('show')
                        })
                    } else {
                        elem.classList.remove('show')
                    }
                })
            } else {
                hide_on_scroll_target.forEach(elem => {
                    let is_array_like = checkIsArrayLike(elem)

                    if (is_array_like) {
                        elem.forEach(el => {
                            el.classList.add('show')
                        })
                    } else {
                        elem.classList.add('show')
                    }
                })

                show_on_scroll_target.forEach(elem => {
                    let is_array_like = checkIsArrayLike(elem)

                    if (is_array_like) {
                        elem.forEach(el => {
                            el.classList.remove('show')
                        })
                    } else {
                        elem.classList.remove('show')
                    }
                })
            }
        }

        // Creating Images Scroll Parallax
        const scroll_width = sticky.scrollWidth
        const vertical_scroll_height = sticky_parent.getBoundingClientRect().height - sticky.getBoundingClientRect().height
        const scroll_ratio = scroll_width / vertical_scroll_height
        // const parallax_target = document.querySelectorAll('.parallax')

        // GSAP Animation Library
        const delayXOnScroll = () => {
            let pos = -(window.scrollY * scroll_ratio * 0.77)

            gsap.to('.parallax', {
                duration: .1,
                x: pos,
                ease: "power2.out"
            })
        }
        
        // Vanilla JavaScript
        // const delayXOnScroll = () => {
        //     const parallax_target = document.querySelectorAll('.parallax')
        //     const is_array_like = checkIsArrayLike(parallax_target)

        //     if (is_array_like) {
        //         parallax_target.forEach((elem) => {
        //             let pos = -(window.scrollY * elem.dataset.ratex * scroll_ratio * 0.77)

        //             elem.setAttribute("style", `transform: translate3d(${pos}px, 0px, 0px);`)
        //         })
        //     } else {
        //         let pos = -(window.scrollY * parallax_target.dataset.ratex * scroll_ratio * 0.77)

        //         parallax_target.setAttribute("style", `transform: translate3d(${pos}px, 0px, 0px);`)
        //     }
        // }

        // Changing page wheel speed
        changePageWheelSpeed(1.5)

        // Adding and removing Event Listeners
        addEventListeners()
        return () => removeEventListeners()
    }, [])


    // useEffect for Intersection Observer
    useEffect(() => {
        logger.debug('Home -> useEffect3')

        // Creating Intersection Observer to change BrandFooter
        let io_target = document.querySelectorAll('.io-target')
        let text_change_target = document.querySelector('.brand-footer__text')
        let brand_footer = document.querySelector('.brand-footer')
        let i = 0

        const handleIntersection = (entries) => {
            let entry = entries[0]

            if (entry.boundingClientRect.right < 0 && entry.boundingClientRect.left < 0) {
                i++         
                brand_footer.classList.remove('show')
                text_change_target.textContent = brands[i]
                brand_footer.classList.add('show')
            } 
            
            if (entry.boundingClientRect.right >= 0 && entry.boundingClientRect.left < 0) {
                i--         
                brand_footer.classList.remove('show')
                text_change_target.textContent = brands[i]
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

            let is_array_like = checkIsArrayLike(target)

            if (is_array_like) {
                target.forEach(elem => io.observe(elem))
            } else {
                io.observe(target)
            }
        }

        createObserver(io_target)
    }, [])


    // useEffect for Mouse Move Translate Parallax
    useEffect(() => {
        logger.debug('Home -> useEffect4')

        let translate_target = document.querySelectorAll('.image') 
        let mid_viewport = window.innerWidth / 2
        let vw_unit_pixels = window.innerWidth / 100
        
        const translateOnMouseMove = (e) => {
            let offset = e.clientX - mid_viewport
            let ratio = offset / vw_unit_pixels 
            
            translate_target.forEach((elem, i) => {
                let translate_x = ratio * elem.dataset.ratex
                
                if (i === 0) {
                    if (window.scrollY > 0) {
                        elem.setAttribute("style", `transform: translate3d(${-translate_x}px, 0px, 0px);`)
                    }
                } else {
                    elem.setAttribute("style", `transform: translate3d(${-translate_x}px, 0px, 0px);`)
                }
            })
        }

        document.addEventListener('mousemove', translateOnMouseMove)
        return () => document.removeEventListener('mousemove', translateOnMouseMove)
    }, [])

    const goToStore = store => navigate(`/items?q=${store}`)

    return <>
        <div className="sticky-parent">
            <div className="sticky">
                <div className="horizontal">
                    {/* <Navbar /> */}
                    <Logo />
                    <HamburgerLine />
                    <BrandFooter />
                    {/* {location.pathname === '/search' && <Search />} */}
                    {/* {location.pathname === '/account' && <Account />} */}
                    {/* {location.pathname === '/profile' && <Profile />} */}
                    {/* {location.pathname === '/newsletter' && <Newsletter />} */}

                    <div className="cover-image--outer parallax">
                        <div className="image" data-ratex="0.5">
                            <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054010_88.jpg?ts=1642070994249&imwidth=476&imdensity=2" alt="" onClick={() => goToStore(brands[0])} />
                        </div>
                    </div>
                    <div className="image--outer big type-a">
                        <div className="image" data-ratex="1">
                            <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" onClick={() => goToStore(brands[0])} /> 
                        </div>
                    </div>
                    <div className="image--outer small type-a io-target parallax">
                        <div className="image" data-ratex="0.3">
                            <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27040091_56.jpg?ts=1636379500926&imwidth=360&imdensity=2" alt="" onClick={() => goToStore(brands[0])} />       
                        </div>
                    </div>

                    <div className="image--outer big type-b">
                        <div className="image" data-ratex="1">
                            <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Ff3%2Fdef33b7fc423c73869aab4bfaa03545eb06cbe97.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />
                        </div>
                    </div>
                    <div className="image--outer medium type-b io-target parallax">
                        <div className="image" data-ratex="0.5">
                            <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F66%2F0e6697cc83741f06914b330f87070ebd98bf0e7f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />   
                        </div>
                    </div>
                    <div className="image--outer small type-b parallax">
                        <div className="image" data-ratex="0.3">
                            <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5d%2F15%2F5d15e6f0e77ff342a1e765a0ab3886db5d8f2284.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />
                        </div>
                    </div>

                    <div className="image--outer big type-c">
                        <div className="image" data-ratex="1">
                            <img className="clickable" src="https://static.zara.net/photos///2022/V/0/1/p/2183/049/500/2/w/1126/2183049500_2_1_1.jpg?ts=1645708543111" alt="" onClick={() => goToStore(brands[2])} />
                        </div>
                    </div>
                    <div className="image--outer medium type-c io-target parallax">
                        <div className="image" data-ratex="0.5">
                            <img className="clickable" src="https://static.zara.net/photos///2022/V/0/1/p/0034/042/621/2/w/1126/0034042621_2_1_1.jpg?ts=1649062243737" alt="" onClick={() => goToStore(brands[2])} />
                        </div>
                    </div>
                    <div className="image--outer small type-c parallax">
                        <div className="image" data-ratex="0.3">
                            <img className="clickable" src="https://static.zara.net/photos///2022/V/0/2/p/5692/340/710/2/w/1126/5692340710_2_1_1.jpg?ts=1644943727722" alt="" onClick={() => goToStore(brands[2])} />     
                        </div>
                    </div>

                    <div className="dim one"></div>

                    <div className="dif two">
                        {/* <div className="cover-image--outer">
                            <div className="image" data-ratex="0.5">
                                <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27054010_88.jpg?ts=1642070994249&imwidth=476&imdensity=2" alt="" onClick={() => goToStore(brands[0])} />
                            </div>
                        </div> */}
                        {/* <div className="image--outer big type-a">
                            <div className="image" data-ratex="1">
                                <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" onClick={() => goToStore(brands[0])} /> 
                            </div>
                        </div> */}
                        {/* <div className="image--outer small type-a io-target">
                            <div className="image" data-ratex="0.3">
                                <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27040091_56.jpg?ts=1636379500926&imwidth=360&imdensity=2" alt="" onClick={() => goToStore(brands[0])} />       
                            </div>
                        </div> */}
                    </div>

                    <div className="dim three"></div>

                    <div className="dif four">
                        {/* <div className="image--outer big type-b">
                            <div className="image" data-ratex="1">
                                <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Ff3%2Fdef33b7fc423c73869aab4bfaa03545eb06cbe97.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />
                            </div>
                        </div> */}
                        {/* <div className="image--outer medium type-b io-target">
                            <div className="image" data-ratex="0.5">
                                <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0e%2F66%2F0e6697cc83741f06914b330f87070ebd98bf0e7f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />   
                            </div>
                        </div> */}
                        {/* <div className="image--outer small type-b">
                            <div className="image" data-ratex="0.3">
                                <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5d%2F15%2F5d15e6f0e77ff342a1e765a0ab3886db5d8f2284.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />
                            </div>
                        </div> */}
                    </div>

                    <div className="dim five"></div>

                    <div className="dif six">
                        {/* <div className="image--outer big type-c">
                            <div className="image" data-ratex="1">
                                <img className="clickable" src="https://static.zara.net/photos///2022/V/0/1/p/2183/049/500/2/w/1126/2183049500_2_1_1.jpg?ts=1645708543111" alt="" onClick={() => goToStore(brands[2])} />
                            </div>
                        </div> */}
                        {/* <div className="image--outer medium type-c io-target">
                            <div className="image" data-ratex="0.5">
                                <img className="clickable" src="https://static.zara.net/photos///2022/V/0/1/p/0034/042/621/2/w/1126/0034042621_2_1_1.jpg?ts=1649062243737" alt="" onClick={() => goToStore(brands[2])} />
                            </div>
                        </div> */}
                        {/* <div className="image--outer small type-c">
                            <div className="image" data-ratex="0.3">
                                <img className="clickable" src="https://static.zara.net/photos///2022/V/0/2/p/5692/340/710/2/w/1126/5692340710_2_1_1.jpg?ts=1644943727722" alt="" onClick={() => goToStore(brands[2])} />     
                            </div>
                        </div> */}
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