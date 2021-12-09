const modifyClient = (name,firstName,lastName,phone,dni,email,token) => {

    const changeDatos = {
        name: name,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        dni: dni,
        email: email
    };

    return new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest;

        xhr.onload = () => {
            const {status} = xhr
            if (status === 400) reject('wrong credential')
            else if(status === 404) reject('page not found')
            else if(status === 200) {


            }
        }
         xhr.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");
         xhr.setRequestHeader('Authorization', 'Bearer ' + token)
         xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(changeDatos));
    })
}

export default modifyClient