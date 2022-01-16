import { useState } from "react"
import Spinner from "components/Spinner"
import LoginForm from "../components/LoginForm"


export default function Register() {
    const [spinner, setSpinner] = useState(false)

    return <>
        {spinner
            ? <Spinner />
            : <LoginForm setSpinner={setSpinner} />
        }
    </>
}