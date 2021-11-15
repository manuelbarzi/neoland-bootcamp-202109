function Unregister(props) {
    logger.info('Unregister -> render')
    return <>

        <div className="unregister container container--vertical container--gapped" onSubmit={event => {
            event.preventDefault()

            const password = event.target.password.value

            try {
                unregisterUser(sessionStorage.token, password, (error) => {
                    if (error) return alert(error.message)

                    event.target.reset()
                    delete sessionStorage.token
                    alert('Unregistered')
                })
                event.target.reset()
            } catch (error) {
                alert(error.message)
                event.target.reset()
            }
        }}>
            <form className="container container--vertical" onSubmit={event => {
                event.preventDefault()

                const password = event.target.password.value
        
            }}>
                <input className="field" type="password" name="password" id="password" placeholder="password"></input>

                <div className="container">
                    <button type="button" className="button button--medium" onClick={() => props.goToHome()}>Home</button>
                    <button type="submit" className="button button--medium button--dark">Unregister</button>
                </div>
            </form>
        </div>
    </>

}