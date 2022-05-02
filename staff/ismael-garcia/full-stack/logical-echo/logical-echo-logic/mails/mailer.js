require('dotenv').config()
import nodemailer from "nodemailer"
import fs from "fs"
import ejs from "ejs"
import { htmlToText } from "html-to-text"
import juice from "juice"

// const smtp = nodemailer.createTransport({
//     host: settings?.smtp?.host,
//     port: settings?.smtp?.port,
//     secure: process.env.NODE_ENV !== "development",
//     auth: {
//       user: settings?.smtp?.username,
//       pass: settings?.smtp?.password,
//     }
// })
const smtp = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: process.env.NODE_ENV !== "development",
    auth: {
        user: 'postmaster@sandboxe6849da5c8ac4ed7b7497b499d603d11.mailgun.org',
        pass: 'f54a1cba47e1c9e5061c362b353def47-53ce4923-8266eb6f'
    }
})

function sendEmail({ template: templateName, templateVars, ...restOfOptions }) {
    const templatePath = `./templates/${templateName}.html`
    const options = {
        ...restOfOptions
    }

    if (templateName && fs.existsSync(templatePath)) {
        const template = fs.readFileSync(templatePath, "utf-8")
        const html = ejs.render(template, templateVars)
        const text = htmlToText(html)
        const htmlWithStylesInlined = juice(html)

        options.html = htmlWithStylesInlined
        options.text = text
    }

    return smtp.sendMail(options)
}

module.exports = sendEmail

// const nodemailer = require("nodemailer")

// const smtp = nodemailer.createTransport({
//   host: 'smtp.mailgun.org',
//   port: 587,
//   secure: process.env.NODE_ENV !== "development",
//   auth: {
//     user: 'postmaster@sandboxe6849da5c8ac4ed7b7497b499d603d11.mailgun.org',
//     pass: 'f54a1cba47e1c9e5061c362b353def47-53ce4923-8266eb6f'
//   }
// })

// export default (options = {}) => {
//     return smtp.sendMail(options)
// }

// const sendEmail = async (email, subject, text) => {
//     try {
//         let transporter = nodemailer.createTransport({
//             host: process.env.HOST,
//             service: process.env.SERVICE,
//             port: 587,
//             secure: true,
//             auth: {
//                 user: process.env.USER,
//                 pass: process.env.PASS
//             }
//         })

//         await transporter.sendMail({
//             from: process.env.USER,
//             to: email,
//             subject: subject,
//             text: text
//         })

//         console.log("email sent sucessfully")
//     } catch (error) {
//         console.log("email not sent")

//         console.error(error)
//     }
// }

// module.exports = sendEmail