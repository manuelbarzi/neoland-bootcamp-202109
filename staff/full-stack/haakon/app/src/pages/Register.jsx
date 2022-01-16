import { useState } from "react"
import Spinner from "components/Spinner"
import RegisterForm from "../components/RegisterForm"
import Feedback from "components/Feedback"

export default function Register() {
    const [spinner, setSpinner] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [level, setLevel] = useState('')

    const showFeedback = (message, level = 'error') => {
        setFeedback(message)
        setLevel(level)
    }

    const acceptFeedback = () => setFeedback(false)

    return <>
        {spinner
            ? <Spinner />
            : <RegisterForm setSpinner={setSpinner} />
        }

        {feedback
            ? <Feedback level={level} message={feedback} onAccept={acceptFeedback} />
            : <RegisterForm setSpinner={setSpinner} showFeedback={showFeedback} />
        }
    </>
}