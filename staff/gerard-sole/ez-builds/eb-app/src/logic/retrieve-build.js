import context from './context'


function retrieveBuild(token, champion) {

    return (async () => {
        const res = await fetch(`${context.API_URL}/builds/${champion ? '?q='+champion : ''}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        const { status } = res

        if (status === 200) {
            const champions = await res.json()

            
            return champions
        } else if (status === 401) {
            const { error } = await res.json()

        } else{ throw new Error('unknown error')}
    })()
}

export default retrieveBuild