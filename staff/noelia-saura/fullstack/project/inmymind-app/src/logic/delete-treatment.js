const deleteTreatment=(token, treatmentId)=>{
    return (async () => {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/treatments/${treatmentId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ treatmentId })
        })

         const { status} = res
        if(status === 204)
            return
        else if (status === 400 || status === 401) {
            const{error}= await res.json()
           
            if('jwt expired'=== error){
                delete sessionStorage.token
            }
            throw new Error(error)

        }else throw new Error('unknown error') 
    })()
}

export default deleteTreatment