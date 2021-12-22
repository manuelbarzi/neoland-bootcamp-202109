function changePass(args = {}) {
    const { error, success } = args

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Change Password | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h3> Change password </h3>

        <form method="POST" action="/change-password">
            <input type="password" name="oldPassword" placeholder="New password"></input>
            <input type="password" name="newPassword" placeholder="Old password"></input>
            ${error? `<p class="feedback feedback--error">${error.message}</p>` : ""}
            ${success? `<p class="feedback feedback--error">${success}</p>` : ""}
            <button type="submit">Submit</button>
        </form>

        <a href="/"><button>Go back</button></a>
    </body>
    </html>`
}

module.exports = changePass