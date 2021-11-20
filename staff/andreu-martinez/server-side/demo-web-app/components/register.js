function register(args ={}){
    const {name, username, feedback} = args

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
        <h1>Register</h1>
        <form method="POST" action="/register">
        <p>Name</p><input type="text" placeholder="name" name="name" ${name? `value="${name}"` : ''} required> 
        <p>Username</p><input type="text" placeholder="username" name="username" placeholder="username" ${username? `value="${username}"` : ''} required>
        <p>Password</p><input type="password" placeholder="password" name="password">
        <br><hr>
        ${feedback? `<p class="feedback feedback--error">${feedback}</p>` : ''}
        <button type="submit">Register</button>
        <a href="/login">Login</a>
    </form>    
    </body>
    </html>`

}

module.exports = register