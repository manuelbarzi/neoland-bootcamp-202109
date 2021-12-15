import AppContext from './AppContext'
import { useState, useContext } from 'react'
import NewEmail from './NewEmail'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

function ListMyEmails({ }) {


    const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    const [view, setView] = useState('list-my-emails')
    const goToNewEmail = () => setView('new-email')

    // const goToProfile = () => setView('profile')

    // const { onFlowStart, onFlowEnd, onFeedback } = useContext(AppContext)

    // const [view, setView] = useState('list-my-messages')

    // const goToMyEmails = () => setView('list-my-messages')

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);
    return <>
        {view === 'list-my-emails' &&
            <div><Button onClick={goToNewEmail} fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >New</Button></div>}

        {view === 'new-email' &&
            <NewEmail></NewEmail>}

    </>
    // return  emails && emails.length ? 
    //     <ul>
    //     { view === 'list-my-messages' && <listMyMessages>
    //     <div className=''>
    //             <div><Button fullWidth
    //                 variant="contained"
    //                 sx={{ mt: 3, mb: 2 }}
    //             >New</Button></div>
    //         </div> </listMyMessages>
    //     }
    //     </ul>
    //     :
    //     null
}

export default ListMyEmails