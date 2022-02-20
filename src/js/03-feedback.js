import throttle from "lodash.throttle";

const emailRef = document.querySelector('input')
const formRef = document.querySelector('form')
const messageRef = document.querySelector('.feedback-form textarea')
const submitRef = document.querySelector('.feedback-form button')

formRef.addEventListener('input', throttle(onTextareaInput, 500))

function onTextareaInput(e) {
    const message = messageRef.value;
    const email = emailRef.value

    localStorage.setItem("feedback-form-state", JSON.stringify({ email, message }))
}
