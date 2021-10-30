function Home(props) {
    return  <div className="pagelayout">
    <div className="title layout__title">
        <h1>RELAX</h1>
    </div>
    <div className="layout__subtitle">
        <p><strong className="name">Name</strong> YOU ARE AT HOME
        </p>
    </div>
    <div className="layout__main">
        <form className="layout__buttons">
            <input type="text" id='query' className="input" name="query" placeholder="Car Query"></input>
            <button className='button' type="submit">SEARCH</button>
        </form>
        <ul className="home-results-list"></ul>
        <div className="home__detail container--hide">
            <h2>title</h2><button className='button'>Back</button>
            <img className="home__detail-image" src="https://previews.123rf.com/images/wuk/wuk1710/wuk171000023/88766953-child-crash-test-dummy-sitting-in-a-car.jpg" alt=""></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas sapiente veritatis, magni natus necessitatibus velit aliquam enim iste? Beatae velit explicabo temporibus et blanditiis! Deleniti nemo voluptatem cumque nam.</p>
            <time>2021</time>
            <span>100 $</span>
            <span>color</span>
            <span>style</span>
            <span>collection</span>
            <span>maker</span>
            <a href="http://">original</a>
        </div>
        <div className="layout__buttons--home-hi layout__buttons container--hide">
            <button className='button'>UPDATE PROFILE</button>
            <button className='button'>CHANGE PASSWORD</button>
            <button className='button'>DELETE ACCOUNT</button>
        </div>
        <div className="layout__buttons--home-low layout__buttons">
            <button className='button'>VIEW PROFILE</button>
            <button className='button' onClick={() => props.OnLanding()}>SIGN OUT</button>
        </div>
    </div>

</div>
}