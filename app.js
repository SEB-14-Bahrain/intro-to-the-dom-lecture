/*------------------ Constants -------------------*/


/*------------------ Variables -------------------*/


/*---------- Cached Element References -----------*/
const btnEl = document.querySelector('button')
const containerEl = document.querySelector('#container')
const inputEl = document.querySelector('input')

/*--------------- Event Listeners ----------------*/
btnEl.addEventListener('click', function(event){
   let pEl = document.createElement('p')
   pEl.textContent = inputEl.value
   containerEl.append(pEl)
   inputEl.value = ''
})

containerEl.addEventListener('click', function(event){
    event.target.style.textDecoration = 'line-through'
})

containerEl.addEventListener('dblclick', function(event){
    event.target.remove()
})

/*------------------ Functions -------------------*/
