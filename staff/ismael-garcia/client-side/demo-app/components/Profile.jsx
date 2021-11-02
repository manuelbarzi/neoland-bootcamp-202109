function Profile() {
    logger.info('Profile -> render')

    return <div className="profile container container--vertical container--gapped" id="profile">
        <form className="container container--vertical">
            <input className="field" type="password" name="old-password" id="old-password" placeholder="Old Password" required />
            <input className="field" type="password" name="new-password" id="new-password" placeholder="New Password" required />

            <div className="container">
                <button type="button" className="button button--medium">Go Back</button>
                <button type="submit" className="button button--medium button--dark">Update</button>
            </div>
        </form>

        <button className="button button--medium button--warning">Unregister</button>
    </div>
}