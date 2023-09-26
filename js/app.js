const input = document.querySelector('input')
const error = document.querySelector('small')

const card = document.querySelector('.card')
const sucess = document.querySelector('.sucess')

const submit = document.getElementById('submit')
const dismiss = document.getElementById('dismiss')

const userEmail = document.querySelector('.user-email')

const emailRegex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/

const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
  let isValid = emailRegex.test(input.value)
  e.preventDefault()

  if (!isValid) {
    error.textContent = 'Invalid Email'
  } else {
    isValidEmail()
    error.textContent = ''
  }

  if (input.value === '') {
    error.textContent = 'This field is required'
  }
  emailInput()
})

function isValidEmail() {
  card.classList.add('hide')
  sucess.classList.remove('hide')
}

function dismissBtn() {
  sucess.addEventListener('click', () => {
    card.classList.remove('hide')
    sucess.classList.add('hide')
  })
}

dismissBtn()

function emailInput() {
  const emailValue = input.value
  userEmail.textContent = emailValue
}
