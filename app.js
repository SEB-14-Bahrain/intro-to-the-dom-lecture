/*------------------ Constants -------------------*/


/*------------------ Variables -------------------*/


/*---------- Cached Element References -----------*/
const btnEl = document.querySelector('button')
const containerEl = document.querySelector('#container')
const inputEl = document.querySelector('input')

/*--------------- Event Listeners ----------------*/
btnEl.addEventListener('click', function(){
// console.log(inputEl.value)
   let pEl = document.createElement('p')
   pEl.textContent = inputEl.value
   containerEl.append(pEl)
   inputEl.value = ''
})

/*------------------ Functions -------------------*/
