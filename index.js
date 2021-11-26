const form = document.querySelector('#myForm')
const userName = document.querySelector('#inputUserName')
const password = document.querySelector('#inputPassword')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // validation()
})
const validation = () => {
    userNameValue=false
    passwordValue=false
    //username
    if (userName.value.trim() == 'admin') {
        setSuccess(userName)
        userNameValue=true
    } else {
        setError(userName, 'Username incorrect')
    }
    //password
    if (password.value.trim() == 12345) {
        setSuccess(password)
        passwordValue=true
    } else {
        setError(password, 'Password incorrect')
    }
    if(userNameValue && passwordValue){
        form.submit()
    }
   
}
//set error function
const setError = (element, errorMessage) => {
    const parent = element.parentElement
    if (parent.classList.contains('success')) {
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('p')
    paragraph.textContent = errorMessage
}
// set success function
const setSuccess = (element) => {
    const parent = element.parentElement
    if (parent.classList.contains('error')) {
        parent.classList.remove('error')
    }
    parent.classList.add('success')
}