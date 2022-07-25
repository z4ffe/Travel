const headerLoginBtn = document.querySelector('#login-button')
const popup = document.querySelector('#popup')
const body = document.querySelector('body')
const loginBtn = document.querySelector('.login-btn')
const popupHeader = document.querySelector('.popup__header')
const regBtn = document.querySelector('#reg-btn')
const facebookBtn = document.querySelector('#facebook-btn')
const googleBtn = document.querySelector('#google-btn')
const underline = document.querySelector('.popup__underline')
const regMail = document.querySelector('#reg-mail')
const regPw = document.querySelector('#reg-password')
const popupWrapper = document.querySelector('.popup-wrapper')
let index = false

headerLoginBtn.addEventListener('click', () => {
	popup.classList.toggle('popup--visible')
	body.style.overflow = 'hidden'
	popupWrapper.classList.toggle('popup--visible')
	index = false
})

popup.addEventListener('click', (event) => {
	if (event.target.classList.contains('popup--visible')) {
		popup.classList.remove('popup--visible')
		popupWrapper.classList.toggle('popup--visible')
		body.style.overflow = 'visible'
		index = false
	}
})


function togglePopup() {
	if (index === false) {
		index = true
		popupHeader.textContent = 'Log in to your account'
		regBtn.textContent = 'Sign In'
		facebookBtn.style.display = 'block'
		googleBtn.style.display = 'block'
		loginBtn.textContent = 'Register'
		underline.style.display = 'block'
	} else {
		index = false
		popupHeader.textContent = 'Create account'
		regBtn.textContent = 'Sign Up'
		facebookBtn.style.display = 'none'
		googleBtn.style.display = 'none'
		loginBtn.textContent = 'Log In'
		underline.style.display = 'none'
	}
}

regBtn.addEventListener('click', () => {
	alert(`Email: ${regMail.value} & Password: ${regPw.value}`)
})

loginBtn.addEventListener('click', () => {
	togglePopup()
})



