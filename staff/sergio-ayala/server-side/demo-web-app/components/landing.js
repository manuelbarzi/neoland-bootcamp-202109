function landing(args) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Demo Web App</title>
    
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Heeloo Wooorld</h1>
        <h2>I'm back bitches!!</h2>
       
        <a href='/signin'><button type='button'>Sign In</button></a>
        <a href='/signup'><button type='button'>Sign Up</button></a>
    
        <a href='https://www.google.com/' target="_blank" ><button type='button'>Ruta a gooooogle</button></a>
    </body>
    </html>`
}
module.exports = landing