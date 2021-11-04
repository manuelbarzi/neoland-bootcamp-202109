function Landing(props) {
    return <div className="landing pagelayout">
    <div className="title layout__title">
        <h1>WELCOME</h1>
    </div>
    <div className="layout__subtitle">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis earum nostrum quis quae accusamus
            repellat velit ipsum sapiente corrupti natus aspernatur, deserunt eveniet. Eveniet, nesciunt deleniti
            assumenda sequi nobis neque?</p>
    </div>
    <div className="layout__main">
        <button className='button' onClick ={() => props.OnSignIn()}>SIGN IN</button>
        <button className='button' onClick ={() => props.OnSignUp()}>SIGN UP</button>
    </div>
</div>
}