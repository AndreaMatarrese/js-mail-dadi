console.log('la tua mail')

const savedEmail = ['prova1@email.com', 'email2@prova.it','emailprova1@prova.it','utente1@mail.com','utente2@mail.it']
let userEmail = document.getElementById("email").value
const userVerify = document.getElementById('verify')

console.log(savedEmail)
console.log(userEmail)


// METODO CON IF

userVerify.addEventListener('click', function(){
    if ((savedEmail.includes(userEmail)) == false) {
        let userResponse= document.getElementById('response')
        // userResponse.classList.add('hide')
        userResponse.innerHTML='La tua mail non è presente, chiedi all\'amministratore di aggiungerti'
        console.log('la mail', userEmail ,'non è presente nella lista')
        console.log('La tua email', userEmail, 'non può accedere')
        // let userEmail = prompt('inserisci un\'altra email')
    } else if ((savedEmail.includes('prova1@email.com')) == true){ 
        let userResponse= document.getElementById('response')
        userResponse.classList.remove('hide')
        userResponse.innerHTML='La tua mail è presente, puoi accedere'
        console.log('la mail è presente nell\'elenco')
        console.log('La tua email', userEmail, 'può accedere')
    }
})




// // METODO CON FOR
// let i= userEmail
// let userResponse= document.getElementById('response')
// let mailChecked = false;
// for(i=0; i<savedEmail.length; i=i++){
//     if(savedEmail[i] == userEmail){
//         mailChecked=true;
//     } 
//     if(mailChecked==true){
//         userResponse.innerHTML='La tua mail è presente'
//     }
    
//     else{
//          userResponse.innerHTML='La tua mail non è presente, chiedi all\'amministratore di aggiungerti'
//     }
// }