# Carpeta src
    - Esta carpeta tiene todo nuestro codigo de desarrollo
    - Contiene el archivo index.js
    - Contiene el archivo style.css
    - Contiene la carpeta de /componenets
    - Contiene la carpeta de /assets (imagenes, fuentes, logos...)
    - Contiene la carpeta de /logic
    - Contiene la carpeta de /utils
# Carpeta public
    - Contiene el HTML
    - Contiene nuestro favicon
    - Contiene el archivo Robots

# Archivo .gitignore
    - Aqui indicamos a git las carpetas y los archivos qe no queremos subir a nuestro repositorio
    - Minimo tendremos: `/node_modules` `env` `.DS_Store` `.vscode` 
    opcionale:`package-lock.json`

# Archivo package.json
    - Dependencies: aqui tendremos todas las dependencias directas para nuestro proyecto
    - devDependencies: aqui tendremos todas las dependencias necesarias exclusivamente para el desarrollo
    - scripts: definimos los comandos mas utilizados o basicos de nuestro desarrollo
    - Este archivo es indispensable

# Archivo package-lock.json
    - Guarda todas las subdependencias que tiene nuestro proyecto, este archo lo podemos eliminar
