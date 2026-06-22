/*------------------ Constants -------------------*/
const colorArr = ['lightblue', 'gold', 'red', 'green', 'plum', 'lime']

/*------------------ Variables -------------------*/

/*---------- Cached Element References -----------*/

const btnEl = document.querySelector('button')
const colorBtnEl = document.querySelector('#color-btn')

/*--------------- Event Listeners ----------------*/

btnEl.addEventListener('click', function(){
    console.log('the button was clicked')
})

colorBtnEl.addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * colorArr.length)
    console.log(randomIndex)


    colorBtnEl.style.backgroundColor = colorArr[randomIndex]


})

/*------------------ Functions -------------------*/