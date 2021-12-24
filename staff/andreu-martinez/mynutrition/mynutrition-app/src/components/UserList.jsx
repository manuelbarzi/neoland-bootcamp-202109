import logger from '../logger'

function UserList(props) {

    const {users} = props

    logger.debug('Results -> render')
   
    return users && users.length ?
        <ul className="results">
            {
                users.map(({ id, name, username }) =>
                    <li key={id} className="users-list">
                        <h2>{name}</h2>
                    </li>)
            }
        </ul>
        :
        null
}
export default UserList