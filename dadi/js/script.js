// recupero variabili
const numUser=document.querySelector('#user-num')
const numPc= document.querySelector('#pc-num')
const numOutput= document.querySelector('#message')
const btnPlay = document.querySelector('#btn-Play')
const btnReset = document.querySelector('#btn-Reset')


btnPlay.addEventListener('click', function(){

    const userNum =Math.floor((Math.random() * 6 ) + 1)
    const pcNum =Math.floor((Math.random() * 6 ) + 1)
    numUser.innerHTML= userNum
    numPc.innerHTML= pcNum
    
    if (userNum > pcNum) {
        numOutput.innerHTML='hai vinto'
    }  else if (pcNum > userNum){
        numOutput.innerHTML='hai perso'
    } else{
        numOutput.innerHTML='pareggio'
    }

})

btnReset.addEventListener('click', function () {
	numUser.innerHTML = '';
	numPc.innerHTML = '';
	numOutput.innerHTML = '';
})
