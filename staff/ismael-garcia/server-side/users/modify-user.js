function modifyUser(id, data, callback) { // data => { name: ?, username: ?, password: ? }
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }

        const users = JSON.parse(json)

        users.forEach(user => {
            if (user.id === id) {
                if (name !== '*' && name !== undefined) {
                    user.name = name
                } else if (username !== '*' && username !== undefined) {
                    user.username = username
                } else if (password !== '*' && password !== undefined) {
                    user.password = password
                }
            }
        })

        const json2 = JSON.stringify(contacts, null, 4)

        writeFile('./agenda.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
        })
    })
}