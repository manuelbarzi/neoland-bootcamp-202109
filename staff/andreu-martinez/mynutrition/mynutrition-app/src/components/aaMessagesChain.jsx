import './OpenMessage.sass'

const MessagesChain = ({message: { id, parent, from, subject, body, sentDate, read }}) => {

    return <>
        <div className="message--container">
                <div className="message--topbar">
                    {subject}
                </div>
                <div className="message--from-date">
                    <div>from</div>
                    {/* <div>{sentDate.split("T")[0].split('-').reverse().join('-')} / {sentDate.split("T")[1].split(".")[0].replace(/:[^:]*$/, '')}</div> */}
                </div>
                <div className='message--body'>
                   my id: {id} parent: {parent}
                </div>
        </div>
    </>
}

export default MessagesChain