/*------------------ Constants -------------------*/
// this creates a new element
const pEl = document.createElement('p')


/*------------------ Variables -------------------*/

/*---------- Cached Element References -----------*/
const todoEl = document.querySelector('.todo')
const bodyEl = document.querySelector('body')



/*--------------- Event Listeners ----------------*/



/*------------------ Functions -------------------*/


pEl.textContent = 'This is my other p tag'
bodyEl.append(pEl)
// pEl.remove()