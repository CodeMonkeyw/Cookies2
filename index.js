let score = 0; 
let cookieClicker = document.getElementById('cookie')
let grandma = 20 
let upgrade = 1
let display = 0
let bankCost = 100
const bankButton = document.getElementById('bunk') 
let bank = document.getElementById('banke')
bankButton.addEventListener('click', ()=> {
if(score <= bankCost){
  window.alert('insufficent Purchase')
}else{
   score++ == score - 100 
 document.getElementById('score').innerHTML = `Cookies:${score -= 100 }`
 setInterval(UpdateGame,500)
}  
if(bank.style.display === 'block'){
bank.style.display = 'none'
}else{
bank.style.display = 'block'
}
})
let cursorCost  = document.getElementById('Cost')

let update = document.getElementById('title')

const cursorButton = document.getElementById('cursorButton')
const errors = document.getElementById('demo')

const saveScore = score
UpdateGame()
 
function saveGame(){
localStorage.setItem('cook',score++)
 document.getElementById('score').innerHTML = `Cookies:${localStorage.getItem('cook')}`
}

const granmaButton = document.getElementById('grandma')

let ScoreUpdate = document.getElementById('score')

function UpdateGame(){
  localStorage.setItem('Cookie',score++)
  console.log(localStorage.getItem('Cookie'))
  updatetitle() 
  
  
  document.getElementById('score'). innerHTML = `Cookies:${score}`

}

granmaButton.addEventListener('click',() => {
  if(score.innerHTML >= grandma){
  
    document.getElementById('score'). innerHTML = `Cookies:${score++ - 20}`
  upgrade++;
  }
})

cursorButton.addEventListener('click',() => {
if(score >= 5) {
  setInterval(UpdateGame,2000)
  score++ == score - 5 
 document.getElementById('score').innerHTML = `Cookies:${score -= 5 }`
 
 
}else{
  window.alert('Insufficent Purchase')
}
})

function updatetitle(){
update.innerHTML = document.getElementById('score'). innerHTML = `Cookies:${score}`
}
updatetitle()
saveGame()
