function ButtonsHome({OnViewProfile, OnViewFavs, OnViewCart}) {
    return <div className="layout__buttons--home-low layout__buttons">
    <button className='button' type='button' onClick={() => OnViewFavs()}>FAVS</button>
    <button className='button' type='button' onClick={() => OnViewCart()}>CART</button>
    <button className='button' type='button' onClick={() => OnViewProfile()}>VIEW PROFILE</button>
    {/* <button className='button' onClick={() => props.OnSignOut()}>SIGN OUT</button> */}
</div>
}

export default ButtonsHome