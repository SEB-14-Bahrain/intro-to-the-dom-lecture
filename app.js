/*------------------ Constants -------------------*/
// this creates a new element
const pEl = document.createElement('p')


/*------------------ Variables -------------------*/

/*---------- Cached Element References -----------*/
const todoEls = document.querySelectorAll('.todo')
const bodyEl = document.querySelector('body')


/*--------------- Event Listeners ----------------*/



/*------------------ Functions -------------------*/

pEl.textContent = 'This is my other p tag'
// adds a class to pEl (the paragraph element)
pEl.classList = 'todo'

// removes the todo class from pEl
// pEl.classList.remove('todo')

bodyEl.append(pEl)
// pEl.remove()

todoEls.forEach(function(item){
    item.classList = 'done'
})