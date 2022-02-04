const addDiary = (
    date,
    emotional,
    timesleep,
    timetowakeup,
    qualitysleep,
    hydrate,
    quantityhydrate,
    exercise,
    meditation,
    earlywakeup,
    makethebed,
    cleanface,
    cleanteeth,
    shower,
    order,
    cleanhouse,
    changesheets,
    cooking,
    gotostreet,
    timetostreet, 
    token) => {
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/diaries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                date,
                emotional,
                timesleep,
                timetowakeup,
                qualitysleep,
                hydrate,
                quantityhydrate,
                exercise,
                meditation,
                earlywakeup,
                makethebed,
                cleanface,
                cleanteeth,
                shower,
                order,
                cleanhouse,
                changesheets,
                cooking,
                gotostreet,
                timetostreet})
        })

        const { status } = res

        if (status === 201)
            return
        else if (status === 409 || status === 400) {
            const { error } = await res.json()
            if('jwt expired'===error){
                delete sessionStorage.token
            }
            throw new Error(error)
        } else throw new Error('unknown error')
    })()
}

export default addDiary