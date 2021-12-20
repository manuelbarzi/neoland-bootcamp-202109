import AppContext from './AppContext'
import { useContext, useState } from 'react'
import logger from '../logger'
import './Inbox.sass'


function MyListedMessages({ messages, users, goToMessageToRead}) {

    return messages && messages.length ? <>

        {messages.slice(0).reverse().map(({ id, from, subject, body, sentDate, read }) =>

            <div className="messages__container">
                <div>
                    <input className='multiSelectorCheckBox' type="checkbox" ></input>
                </div>
                <div className={`messages ${!read ? 'messages__new' : ''}`} onClick={() => goToMessageToRead(id)}>
                    <div></div>
                    <div className="messages messages__item1" >
                        {users.find(element => element.id === from).name}
                    </div>
                    <div></div>
                    <div className="messages messages__item2">
                        {subject}
                    </div>
                    <div></div>
                    <div className="messages messages__item3">
                        {body.length > 50 ? body.split("", 50).concat('...') : body}
                    </div>
                    <div></div>
                    <div className="messages messages__item4">
                        {sentDate.split("T")[0].split('-').reverse().join('-')}

                    </div>
                </div>
            </div>
        )}
    </> : null

}

export default MyListedMessages