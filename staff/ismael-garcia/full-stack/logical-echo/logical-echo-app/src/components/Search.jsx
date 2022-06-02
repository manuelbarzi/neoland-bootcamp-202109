import { useQueryParams } from '../hooks'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './Search.css'

function Search() {
    logger.debug('Search -> render')

    const queryParams = useQueryParams()

    const [query, setQuery] = useState(queryParams.get('q'))
    
    const navigate = useNavigate()

    // const brands = ['Mango', 'H&M', 'Zara']

    useEffect(() => {
        // let navbar = document.querySelector('.navbar')
        // let scroll_end = (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        const search = document.querySelector('.search')
        // let images = document.querySelectorAll('.thumbnail')
        search.classList.add('show')
        // navbar.classList.add('show')
        // if (scroll_end) {
        //     search.classList.add('show')
        // } else {
        //     search.classList.remove('show')
        // }
        
        // images.forEach((elem) => {
        //     elem.classList.add('show')
        // })
    }, [])

    const search = query => {
        setQuery(query)

        navigate(`/items?q=${query}`)
    }

    const goToStore = store => navigate(`/items?q=${store}`)

    return <>
        <div className="search container container--vertical">
            <form className="search-form form" onSubmit={event => {
                event.preventDefault()

                const query = event.target.query.value 

                search(query)
            }}>
                <input className="field" type="text" placeholder="Search criteria" name="query" defaultValue={query} />
                <button type="submit" className="button button--medium clickable">Search</button>
            </form>

            {/* <div className="lower container container--gapped">
                <div className="thumbnail type-a" data-ratex="1">
                    <img className="clickable" src="https://st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" onClick={() => goToStore(brands[0])} /> 
                    <span className='thumbnail-brand'>{brands[0]}</span>
                </div>

                <div className="thumbnail type-b" data-ratex="1">
                    <img className="clickable" src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fde%2Ff3%2Fdef33b7fc423c73869aab4bfaa03545eb06cbe97.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="" onClick={() => goToStore(brands[1])} />
                    <span className='thumbnail-brand'>{brands[1]}</span>
                </div>

                <div className="thumbnail type-c" data-ratex="1">
                    <img className="clickable" src="https://static.zara.net/photos///2022/V/0/1/p/2183/049/500/2/w/1126/2183049500_2_1_1.jpg?ts=1645708543111" alt="" onClick={() => goToStore(brands[2])} />
                    <span className='thumbnail-brand'>{brands[2]}</span>
                </div>
                    <button type='button' className="button button--medium clickable" onClick={() => goToStore('Zara')}>Zara</button>

                    <button type='button' className="button button--medium clickable" onClick={() => goToStore('HM')}>H&M</button>

                    <button type='button' className="button button--medium clickable" onClick={() => goToStore('Mango')}>Mango</button>
            </div> */}
        </div>
    </>
}

export default Search