function changeData(args = {}) {
    const { name, username, error, success } = args

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Change Data | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h3> Change data </h3>

        <form method="POST" action="/change-data">
            <input type="text" name="name" placeholder="Name" ${name ? `value="${name}"` : ""}></input>
            <input type="text" name="username" placeholder="Username" ${username ? `value="${username}"` : ""}></input>
            ${error? `<p class="feedback feedback--error">${error.message}</p>` : ""}
            ${success? `<p class="feedback feedback--error">${success}</p>` : ""}
            <button type="submit">Submit</button>
        </form>

        <a href="/"><button>Go back</button></a>
    </body>
    </html>`
}

module.exports = changeData