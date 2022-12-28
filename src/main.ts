export const firstName = document.getElementById('first-name') as HTMLInputElement
export const lastName = document.getElementById('last-name') as HTMLInputElement
export const email = document.getElementById('email') as HTMLInputElement
export const button = document.getElementById('btn') as HTMLButtonElement
const error = document.getElementById('error') as HTMLDivElement

button.addEventListener('click', (e) => {
    e.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g as RegExp
    const fullNameCheck = firstName.value.length > 3 && lastName.value.length > 3 as boolean
    const inputValue = email.value.length > 0 as boolean
    const verifieEmail = email.value.match(regex) as RegExpMatchArray | null
    if (!fullNameCheck) {
        error.innerHTML = `Name fields are empty or less then 4 letters`
    }
    if (!inputValue) {
        error.innerHTML = `Email field is empty`
    }
    if (inputValue && !verifieEmail) {
        error.innerHTML = `Please provide a valid email address`
    }
    if (verifieEmail && fullNameCheck) {
        error.innerHTML = ``
    }
})