const form = document.querySelector('#myForm')
const userName = document.querySelector('#inputUserName')
const password = document.querySelector('#inputPassword')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validation()
})
const validation = () => {
    //username
    if (userName.value.trim() == '') {
        setError(userName, 'Username cannot be empty')
    }else{
        setSuccess(userName)
    }
    //password
    if(password.value.trim() ==''){
        setError(password,'Password cannot be empty')
    }else{
        setSuccess(password)
    }
}
//set error function
const setError = (element, errorMessage) => {
    const parent = element.parentElement
    if(parent.classList.contains('success')){
        parent.classList.remove('success')
    }
    parent.classList.add('error')
    const paragraph = parent.querySelector('p')
    paragraph.textContent=errorMessage
}
// set success function
const setSuccess = (element)=>{
    const parent = element.parentElement
    if(parent.classList.contains('error')){
        parent.classList.remove('error')
    }
    parent.classList.add('success')

}