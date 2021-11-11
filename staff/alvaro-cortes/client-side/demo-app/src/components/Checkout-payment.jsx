import React from "react"
import './Home.css'
import './Checkout.css'

function Checkout({ onBack }) {
    return <>
        <div className="welcome__results container container--vertical">
            <button className="button" onClick={() => onBack()}>Volver atras</button>
            <div className="checkout container--vertical">
                <h2>Método de pago</h2><hr />
                <div>
                    <img src="https://www.heb.com.mx/media/wysiwyg/Visa-MasterCard-1024x393.png" width="150px" />
                </div>
                <div>
                    <img src="https://www.shop-farmacia.it/pix/paypal.png" width="150px"/>
                </div>

                <div>
                    <img src="https://img.ltwebstatic.com/images2_pi/2018/06/06/1528273036537082707.png" width="80px"/>
                </div>

            </div>
        </div>
    </>
}

export default Checkout