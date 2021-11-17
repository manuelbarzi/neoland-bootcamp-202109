const { register } = require("./logic");
const {argv, argv: [, , command]} = process


switch(command) {

    case 'register':
        register({
            name: argv[3],
            username: argv[4],
            email: argv[5],
            password: argv[6]
        }, (err, res) => {
            if (err) console.log(err)
            else console.log(res)
        })
    break

    case 'unregister': null; break
    case 'modify': null; break
    case 'find': null; break
    case 'retrieveUser': null; break
    default: console.log('command not found')
}