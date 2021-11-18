function home (user) {
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
        <h1>Hello, ${user.username}!</h1>

        <a href="/modify-password"><button>Cambiar contraseña</button></a>
        <a href="/changedata"><button>Cambiar datos de usuario</button></a>

    </body>
    </html>`

}

module.exports = home