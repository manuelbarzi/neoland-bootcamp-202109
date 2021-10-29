document.body.classList.add ('register-img')
var form = document.createElement('form')
form.classList.add('form')

document.body.append (form)

var titleRegister = document.createElement ('h1')
titleRegister.classList.add ('formtitle')
titleRegister.innerText = '------- Register -------'

var subtitleRegister = document.createElement ('p')
subtitleRegister.classList.add ('formsubtitle')
subtitleRegister.innerText = 'Please complete the form'

var formInput = document.createElement ('div')
formInput.classList.add ('forminput-register')

form.append (titleRegister, subtitleRegister, formInput)

var inputFirstname = document.createElement ('input')
inputFirstname.classList.add ('forminput')
inputFirstname.type = 'text'
inputFirstname.placeholder = 'First Name'

var inputLastname = document.createElement ('input')
inputLastname.classList.add ('forminput')
inputLastname.type = 'text'
inputLastname.placeholder = 'Last Name'

var inputEmail = document.createElement ('input')
inputEmail.classList.add ('forminput')
inputEmail.type = 'email'
inputEmail.placeholder = 'E-Mail'

var inputPassword = document.createElement ('input')
inputPassword.classList.add ('forminput')
inputPassword.type = 'password'
inputPassword.placeholder = 'Password'

formInput.append(inputFirstname, inputLastname, inputEmail, inputPassword)

var terms = document.createElement ('div')
terms.classList.add ('formterms')

form.append (terms)

var inputTerms = document.createElement('input')
inputTerms.classList.add ('formcheckbox') 
inputTerms.type = 'checkbox'

var labelTerms = document.createElement ('label')
labelTerms.classList.add ('form__label')
labelTerms.htmlFor = ''
labelTerms.innerText = 'I accept the'

terms.append(inputTerms, labelTerms)

var linkTerms = document.createElement ('a')
linkTerms.classList.add ('link')
linkTerms.href = 'https://policies.google.com/terms?hl=en-US'
linkTerms.innerText = 'Terms of use'

var linkPrivacy = document.createElement ('a')
linkPrivacy.classList.add ('link')
linkPrivacy.href = 'https://policies.google.com/terms?hl=en-US'
linkPrivacy.innerText = 'Terms of use'

labelTerms.append (linkTerms, linkPrivacy)

var button = document.createElement ('button')
button.classList.add ('button')
button.innerText = 'Register Now'

form.append (button)



/* <body class="register-img">
    <form class="form">
        <h1 class="formtitle">------- Register -------</h1>
        <p class="formsubtitle">Lorem ipsum dolor sit amet.</p>
        <div class="forminput-register">
            <input class="forminput" type="text" placeholder="First Name">
           <input class="forminput" type="text" placeholder="Last Name">
           <input class="forminput" type="email" placeholder="Email">
           <input class="forminput" type="password" placeholder="Password">
           <input class="forminput" type="password" placeholder="Confirm Password">
        </div>
        <div class="formterms">
            <input class="formcheckbox" type="checkbox"><label class="form__label" for="">I accept the <a class="link" href="#">Terms of Use</a> & <a  class="link" href="#">Privacy Policy</a></label>
        </div>
        <button class="button">Register Now</button>
    </form>
</body>
</html>  */