const UpdatePass = props =>{

    return <React.Fragment>
        <div className="profile container container--vertical container--gapped"
        onSubmit={event =>{
            event.preventDefault()
        }}>
            <form className="container container--vertical">
                <input type="password" className="field" name="oldPassword" id="oldPassword" placeholder="old password"/>
                <input type="password" className="field" name="oldPassword" id="password" placeholder="new password"/>

                <div className="container">
                    <button className="button button--medium" onClick={()=> props.goToHome()}>Go back</button>
                    <button className="button button--medium button--dark">Update</button>
                </div>
                <button className="button button--medium">Unregister</button>
            </form>
        </div>
    </React.Fragment> 
}