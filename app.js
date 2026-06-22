/*------------------ Constants -------------------*/

/*------------------ Variables -------------------*/

/*---------- Cached Element References -----------*/

const btnEl = document.querySelector('button')
const colorBtnEl = document.querySelector('#color-btn')


/*--------------- Event Listeners ----------------*/

btnEl.addEventListener('click', function(){
    console.log('the button was clicked')
})

colorBtnEl.addEventListener('click', function(){
    // colorBtnEl.style.backgroundColor = 'orange'
    if (colorBtnEl.style.backgroundColor === 'orange') {
        colorBtnEl.style.backgroundColor = ''
        console.log('we know it was already clicked')
    } else {
        colorBtnEl.style.backgroundColor = 'orange'
        console.log('we need to make it orange')
    }


})

/*------------------ Functions -------------------*/