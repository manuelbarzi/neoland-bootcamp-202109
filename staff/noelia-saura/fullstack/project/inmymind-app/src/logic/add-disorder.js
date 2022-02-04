const addDisorder = (
    date,
    symptom,
    relax,
    negativestate,
    breathe,
    initiatives,
    whichinitiatives,
    overreaction,
    tremblehands,
    paralyzed,
    nerves,
    worried,
    whichworried,
    live,
    sad,
    verysleep,
    panic,
    enthuse,
    value,
    irritable,
    afraid,
    overthinking,
    causedstate,
    token) =>{
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/disorders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                date,
                symptom,
                relax,
                negativestate,
                breathe,
                initiatives,
                whichinitiatives,
                overreaction,
                tremblehands,
                paralyzed,
                nerves,
                worried,
                whichworried,
                live,
                sad,
                verysleep,
                panic,
                enthuse,
                value,
                irritable,
                afraid,
                overthinking,
                causedstate,
            })
        })

        const { status } = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()
            if ('jwt expired' === error) {
                delete sessionStorage.token
            }
            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default addDisorder