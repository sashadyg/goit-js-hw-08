import throttle from "lodash.throttle";

const emailRef = document.querySelector('input')
const formRef = document.querySelector('form')
const messageRef = document.querySelector('.feedback-form textarea')
const submitRef = document.querySelector('.feedback-form button')

formRef.addEventListener('input', throttle(onTextareaInput, 500))
formRef.addEventListener('submit', submitAction)

checkTextarea()

function onTextareaInput(e) {
    const message = messageRef.value;
    const email = emailRef.value

    localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }))
}

function checkTextarea() {
    const savedMessage = localStorage.getItem("feedback-form-state")
    const savedParsedMessage = JSON.parse(savedMessage)
    
    if (savedMessage) {
        emailRef.value = savedParsedMessage.email
        messageRef.value = savedParsedMessage.message   
    }
}

function submitAction(e) {
    e.preventDefault()

    const savedMessage = localStorage.getItem("feedback-form-state")
    const savedParsedMessage = JSON.parse(savedMessage)
    
    console.log(savedParsedMessage);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}
