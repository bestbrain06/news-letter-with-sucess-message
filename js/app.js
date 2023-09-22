const form = document.querySelector('#form')
const input = document.querySelector('input')
const small = document.querySelector('small')

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
  }

  if (error) {
    e.preventDefault()
  }
})
