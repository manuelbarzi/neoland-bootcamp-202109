function authenticate(args ={}){
    const {username, feedback} = args

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Login</h1>
        <form method="POST" action="/login">
        <p>Username</p><input type="text" placeholder="username" name="username" ${username? `value="${username}"` : ''}>
        <p>Password</p><input type="password" placeholder="password" name="password">
        <br><hr>
        ${feedback? `<p class="feedback feedback--error">${feedback}</p>` : ''}
        <button type="submit">Login</button>
    </form>    
    </body>
    </html>`
}

module.exports = authenticate