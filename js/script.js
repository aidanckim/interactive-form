/*******************
FOCUS ON FIRST INPUT
********************/

document.getElementById('name').focus()

/*******
JOB ROLE
********/

const jobRole = document.getElementById('title')
const otherRole = document.getElementById('other-title')
otherRole.style.display = 'none'

jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    otherRole.style.display = ''
  } else {
    otherRole.style.display = 'none'
  }
})

/***********
T-SHIRT INFO
************/

const colorLabel = document.querySelector('label[for="color"]')
const designTheme = document.getElementById('design')
const colorOptions = document.getElementById('color').children
const colorDropDown = document.getElementById('color')
const selectTheme = document.querySelectorAll('#design option')[0]
colorLabel.textContent = 'Please select a T-shirt theme'
colorDropDown.hidden = true
selectTheme.hidden = true
colorLabel.hidden = true

designTheme.addEventListener('change', (e) => {
  for (var i = 0; i < colorOptions.length; i++) {
    console.log(colorOptions[i])
    const eventValue = e.target.value
    colorDropDown.hidden = false
    colorLabel.hidden = false
    if (eventValue === 'js puns') {
      colorOptions[0].selected = true
      if (colorOptions[i].innerHTML.includes('JS Puns')) {
        colorOptions[i].style.display = ''
      } else {
        colorOptions[i].style.display = 'none'
      }
    } else if (eventValue === 'heart js') {
      colorOptions[3].selected = true
      if (colorOptions[i].innerHTML.includes('JS shirt')) {
        colorOptions[i].style.display = ''
      } else {
        colorOptions[i].style.display = 'none'
      }
    }
  }
})

/*********************
REGISTER FOR ACTIVITES
**********************/

const domElement = document.createElement('div')
const activity = document.querySelector('.activities')
activity.appendChild(domElement)
let totalCost = 0

activity.addEventListener('change', (e) => {
  const clicked = e.target
  const clickedCost = parseInt(clicked.getAttribute('data-cost'))
  if (clicked.checked) {
    totalCost += clickedCost
  } else {
    totalCost -= clickedCost
  }
  domElement.textContent = `Total: $${totalCost}`

  const clickedDate = clicked.getAttribute('data-day-and-time')
  const checkboxes = document.querySelectorAll('.activities input')
  for (let i = 0; i < checkboxes.length; i++) {
    const checkboxType = checkboxes[i].getAttribute('data-day-and-time')
    if (clickedDate === checkboxType && clicked !== checkboxes[i]) {
      if (clicked.checked) {
        checkboxes[i].disabled = true
      } else {
        checkboxes[i].disabled = false
      }
    }
  }
})

/**************
PAYMENT SECTION
***************/

const paymentOptions = document.getElementById('payment')
const creditCard = document.getElementById('credit-card')
const paypal = document.getElementById('paypal')
const bitcoin = document.getElementById('bitcoin')
const invalidPaymentChoice = paymentOptions.firstElementChild
paypal.hidden = true
bitcoin.hidden = true
invalidPaymentChoice.remove()

paymentOptions.addEventListener('change', () => {
  if (paymentOptions.value === 'credit card') {
    creditCard.hidden = false
    paypal.hidden = true
    bitcoin.hidden = true
  }
  if (paymentOptions.value === 'paypal') {
    creditCard.hidden = true
    paypal.hidden = false
    bitcoin.hidden = true
  }
  if (paymentOptions.value === 'bitcoin') {
    creditCard.hidden = true
    paypal.hidden = true
    bitcoin.hidden = false
  }
})

/**************
FORM VALIDATION
***************/

const form = document.querySelector('form')
const name = document.querySelector('#name')
const nameLabel = document.querySelector('label[for="name"]')
const nameDiv = document.createElement('div')
nameDiv.textContent = 'Please enter a valid name (letters only).'
nameDiv.style.color = 'red'
nameLabel.appendChild(nameDiv)
nameDiv.hidden = true

function allLetter (inputtxt) {
  const letters = /^[A-Za-z]+$/
  if (inputtxt.value.match(letters)) {
    nameDiv.hidden = true
    name.style.borderColor = 'white'
    return true
  } else {
    nameDiv.hidden = false
    name.style.borderColor = 'red'
    return false
  }
}

const email = document.querySelector('#mail')
const emailLabel = document.querySelector('label[for="mail"]')
const emailDiv = document.createElement('div')
emailDiv.textContent = 'Please enter a valid email address.'
emailDiv.style.color = 'red'
emailLabel.appendChild(emailDiv)
emailDiv.hidden = true

function validEmail (inputText) {
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  if (inputText.value.match(mailformat)) {
    emailDiv.hidden = true
    email.style.borderColor = 'white'
    return true
  } else {
    emailDiv.hidden = false
    email.style.borderColor = 'red'
    return false
  }
}

const activityInputs = document.querySelectorAll('.activities input')
const activityDiv = document.createElement('div')
const activityLegend = document.querySelector('.activities legend')
activityDiv.textContent = 'Please select one or more activities.'
activityDiv.style.color = 'red'
activityLegend.appendChild(activityDiv)
activityDiv.hidden = true

const activityValidator = () => {
  for (let i = 0; i < activityInputs.length; i++) {
    if (activityInputs[i].checked) {
      activityDiv.hidden = true
      return true
    }
  }
  activityDiv.hidden = false
  return false
}

const card = document.querySelector('#cc-num')
const cardDiv = document.createElement('div')
const cardLabel = document.querySelector('label[for="cc-num"]')
cardDiv.textContent = 'This is required.'
cardDiv.style.color = 'red'
cardLabel.appendChild(cardDiv)
cardDiv.hidden = true
const cardDiv2 = document.createElement('div')
cardDiv2.textContent = 'Your number must be between 13 and 16.'
cardDiv2.style.color = 'red'
cardLabel.appendChild(cardDiv2)
cardDiv2.hidden = true

const cardValidator = () => {
  const cardNum = card.value

  if (cardNum.length > 12 && cardNum.length < 17) {
    cardDiv.hidden = true
    cardDiv2.hidden = true
    card.style.borderColor = 'white'
    return true
  } else if (cardNum.length >= 1 && cardNum.length <= 12) {
    cardDiv.hidden = true
    cardDiv2.hidden = false
    card.style.borderColor = 'red'
    return true
  } else if (cardNum.length >= 17) {
    cardDiv.hidden = true
    cardDiv2.hidden = false
    card.style.borderColor = 'red'
    return true
  } else if (cardNum.length === 0) {
    cardDiv.hidden = false
    cardDiv2.hidden = true
    card.style.borderColor = 'red'
    return false
  }
}

const zip = document.querySelector('#zip')
const zipDiv = document.createElement('div')
const zipLabel = document.querySelector('label[for="zip"]')
zipDiv.textContent = 'This is required.'
zipDiv.style.color = 'red'
zipLabel.appendChild(zipDiv)
zipDiv.hidden = true

const zipValidator = () => {
  const zipNum = zip.value
  if (zipNum.length === 5) {
    zipDiv.hidden = true
    zip.style.borderColor = 'white'
    return true
  } else {
    zipDiv.hidden = false
    zip.style.borderColor = 'red'
    return false
  }
}

const cvv = document.querySelector('#cvv')
const cvvDiv = document.createElement('div')
const cvvLabel = document.querySelector('label[for="cvv"]')
cvvDiv.textContent = 'This is required.'
cvvDiv.style.color = 'red'
cvvLabel.appendChild(cvvDiv)
cvvDiv.hidden = true

const cvvValidator = () => {
  const cvvNum = cvv.value
  if (cvvNum.length === 3) {
    cvvDiv.hidden = true
    cvv.style.borderColor = 'white'
    return true
  } else {
    cvvDiv.hidden = false
    cvv.style.borderColor = 'red'
    return false
  }
}

form.addEventListener('change', () => {
  activityValidator()
  cardValidator()
  zipValidator()
  cvvValidator()
  allLetter(name)
  allNumericCard(card)
  allNumericZip(zip)
  allNumericCVV(cvv)
  validEmail(email)
})

form.addEventListener('submit', (e) => {
  if (!activityValidator()) {
    e.preventDefault()
  }
  if (paymentOptions.children[0].selected) {
    if (!cardValidator()) {
      e.preventDefault()
    }
    if (!zipValidator()) {
      e.preventDefault()
    }
    if (!cvvValidator()) {
      e.preventDefault()
    }
  }
  allLetter(name)
  allNumericCard(card)
  allNumericZip(zip)
  allNumericCVV(cvv)
  validEmail(email)
})

/***************
REGEX VALIDATION
****************/

const cardDiv3 = document.createElement('div')
cardDiv3.textContent = 'Please enter numbers only. Please also enter a valid credit card.'
cardDiv3.style.color = 'red'
cardLabel.appendChild(cardDiv3)
cardDiv3.hidden = true

function allNumericCard (inputtxt) {
  const numbers = /^[0-9]+$/
  if (inputtxt.value.match(numbers)) {
    cardDiv3.hidden = true
    return true
  } else {
    cardDiv3.hidden = false
    return false
  }
}

const cardDiv4 = document.createElement('div')
cardDiv4.textContent = 'Please enter numbers only.'
cardDiv4.style.color = 'red'
zipLabel.appendChild(cardDiv4)
cardDiv4.hidden = true

function allNumericZip (inputtxt) {
  const numbers = /^[0-9]+$/
  if (inputtxt.value.match(numbers)) {
    cardDiv4.hidden = true
    return true
  } else {
    cardDiv4.hidden = false
    return false
  }
}

const cardDiv5 = document.createElement('div')
cardDiv5.textContent = 'Please enter numbers only.'
cardDiv5.style.color = 'red'
cvvLabel.appendChild(cardDiv5)
cardDiv5.hidden = true

function allNumericCVV (inputtxt) {
  const numbers = /^[0-9]+$/
  if (inputtxt.value.match(numbers)) {
    cardDiv5.hidden = true
    return true
  } else {
    cardDiv5.hidden = false
    return false
  }
}
