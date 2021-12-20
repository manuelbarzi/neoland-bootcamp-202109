import logger from '../logger'
import * as React from 'react';
import './Spinner.sass'

function Spinner() {
    logger.debug('Spinner -> render')



    // return <>
    // <section class="watermelon">
	//     <div></div><div></div><div></div>
	//     <div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
    // </section>

    // <section class="slice">
	//     <div></div><div></div><div></div>
	//     <div><i></i><i></i><i></i><i></i></div>
    // </section>
    // </>

    return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>

    // return <div className="spinner">
    //     <img className="spinner__image" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
    // </div>
}

export default Spinner

