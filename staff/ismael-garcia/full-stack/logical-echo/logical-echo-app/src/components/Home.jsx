import { useNavigate } from 'react-router-dom'
import logger from '../utils/logger'
import './Home.css'

function Home() {
    logger.debug('Home -> render')

    const navigate = useNavigate()

    const goToStore = store => navigate(`/items?q=${store}`)

    return <>
        <div id="home" className="container container--vertical container--gapped">
            <div className='container container--gapped'>
                <h1>Join conscious, committed life!</h1>
            </div>

            <div className='container container--gapped'>
                <button type='button' className="button button--medium button--dark" onClick={() => goToStore('Zara')}>Zara</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToStore('HM')}>H&M</button>

                <button type='button' className="button button--medium button--dark" onClick={() => goToStore('Mango')}>Mango</button>

            </div>

            <div className='container container--gapped'>
                <img className="home-image" src="//st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" />

                {/* <img className="home-image" src="//st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" />

                <img className="home-image" src="//st.mngbcn.com/rcs/pics/static/T1/fotos/S20/17004072_05.jpg?ts=1629104683133&imwidth=476&imdensity=2" alt="" /> */}
            </div>
        </div>
    </>
}

export default Home