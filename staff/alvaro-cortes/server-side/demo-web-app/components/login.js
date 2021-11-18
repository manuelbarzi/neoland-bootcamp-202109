function login(args = {}) {
    const { username, error } = args

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Login | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
        <h1>Login</h1>
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" ${username ? `value="${username}"` : ""} required>
            <input type="password" name="password" placeholder="Password" required minlength="8">
            ${error? `<p class="feedback feedback--error">${error.message}</p>` : ""}
            <button>Login</button>
        </form>
    </body>
    </html>`
}

module.exports = login