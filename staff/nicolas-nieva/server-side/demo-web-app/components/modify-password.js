function modifyPassword (args={}) {
    const {feedback} = args
    
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Private | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h3> Modificar contraseña </h3>

        <form method="POST" action="/modify-password">
            <input type="password" name="oldPassword" placeholder="Contraseña anterior"></input>
            <input type="password" name="newPassword" placeholder="Nueva contraseña"></input>
            ${feedback ? `<p class= "feedback feedback--error">${feedback}</p>`:''}
            <button type="submit">Enviar</button>
        </form>

        <a href="/"><button>Volver atrás</button></a>
    </body>
    </html>`
}

module.exports = modifyPassword