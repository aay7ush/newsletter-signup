const inputField = document.querySelector('input')
const form = document.querySelector('form')
const errorMessage = document.getElementById('error-msg')
const signUpPage = document.getElementById('sign-up')
const successPage = document.getElementById('success')
const dismissButton = document.getElementById('dismiss-btn')
const emailAddress = document.getElementById('email')

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(String(email).toLowerCase())
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (!validateEmail(inputField.value)) {
    inputField.classList.replace('border-clr-grey', 'border-clr-tomato')
    inputField.classList.replace('text-clr-slate-grey', 'text-clr-tomato')
    inputField.classList.add('bg-[#ffe8e6]')
    errorMessage.classList.remove('hidden')

    inputField.addEventListener('keydown', () => {
      inputField.classList.replace('border-clr-tomato', 'border-clr-grey')
      inputField.classList.replace('text-clr-tomato', 'text-clr-slate-grey')
      inputField.classList.remove('bg-[#ffe8e6]')
      errorMessage.classList.add('hidden')
    })
  } else {
    emailAddress.textContent = inputField.value
    signUpPage.classList.replace('md:grid', 'hidden')
    successPage.classList.replace('hidden', 'grid')
  }
})

dismissButton.addEventListener('click', () => {
  signUpPage.classList.replace('hidden', 'md:grid')
  successPage.classList.replace('grid', 'hidden')
})
