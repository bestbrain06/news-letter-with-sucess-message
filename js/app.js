const input = document.querySelector('input')
const error = document.querySelector('small')

const card = document.querySelector('.card')
const sucess = document.querySelector('.sucess')

const submit = document.getElementById('submit')
const dismiss = document.getElementById('dismiss')

const emailRegex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/

submit.addEventListener('click', () => {
  let isValid = emailRegex.test(input)

  if (input.value === '') {
    error.textContent = 'This field is required'
  }
  if (!isValid) {
    error.textContent = 'Invalid Email'
  } else {
    card.classList.add('hide')
    dismiss.classList.remove('hide')
    console.log(isValid)

    dismiss.addEventListener('click', () => {
      dismiss.classList.add('hide')
      card.classList.remove('hide')
    })
  }
})
