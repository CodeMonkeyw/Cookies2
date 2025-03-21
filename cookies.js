let score = 0 
function add(){
    score++;
    
  document.getElementById('score').innerHTML = `Cookies:${score}`
}

function grandma(){

 if(score >= 20 ){
     score++ == score - 20
    document.getElementById('score').innerHTML =  `Cookies:${score - 20}`

   console.log(score - 20 )
 }else {
    document.getElementById('demo').innerHTML = 'Not enough cookies'
 }

}
grandma()