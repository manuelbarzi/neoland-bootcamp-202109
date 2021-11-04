function ButtonsHome(props) {
    return <div className="layout__buttons--home-low layout__buttons">
    <button className='button' onClick={() => props.OnViewProfile()}>VIEW PROFILE</button>
    <button className='button' onClick={() => props.OnSignOut()}>SIGN OUT</button>
</div>
}

export default ButtonsHome