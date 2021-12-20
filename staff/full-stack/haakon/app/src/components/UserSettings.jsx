// import './UserSettings.sass'

const UserSettings = () => {
    return <>
        <h1>Settings</h1>
        <div>
            <p>Profile</p>
            <p>My Password</p>
        </div>
        <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Bio' />
            <button>Save Changes</button>
        </form>
        <a href="">Delete your account</a>
    </>
}

export default UserSettings