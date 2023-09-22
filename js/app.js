const form = document.querySelector('#form')
const input = document.querySelector('input')
const small = document.querySelector('small')

const card = document.querySelector('.card')
const sucess = document.querySelector('.sucess')

const submit = document.getElementById('submit')
const dismiss = document.getElementById('dismiss')

const emailRegex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/

form.addEventListener('submit', (e) => {
  let error = false
  let validEmail = emailRegex.test(input.value)

  if (!validEmail) {
    small.textContent = ' Invalid  Email'
    input.style.borderColor = ' hsl(4, 100%, 67%)'
    error = true
  } else {
    error.textContent = ''
    submit.addEventListener('click', () => {
      card.classList.add('hide')
      sucess.classList.remove('hide')
    })
    dismiss.addEventListener('click', () => {
      card.classList.remove('hide')
      sucess.classList.add('hide')
    })
  }

  if (error) {
    e.preventDefault()
  }
})
