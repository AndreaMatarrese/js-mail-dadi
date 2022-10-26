// recupero variabili
const numUser=document.querySelector('.user-num')
const numPc= document.querySelector('.pc-num')
const numOutput= document.querySelector('.message')


// numUser= Math.floor((Math.random() * 6 ) + 1)
// numPc=Math.floor((Math.random() * 6 ) + 1)

if (numUser>numPc) {
    numUser.innerHTML= Math.floor((Math.random() * 6 ) + 1)
    numPc.innerHTML=Math.floor((Math.random() * 6 ) + 1)
    // numUser.innerHTML=(numUser)
    // numPc.innerHTML=numPc
    numOutput.innerHTML='hai vinto'
    
} else if(numPc>numUser) {
    numOutput.innerHTML='ha vinto il pc'
    
} else{
    numOutput.innerHTML='pareggio'
}