console.log('la tua mail')
const savedEmail = ['prova1@email.com', 'email2@prova.it','emailprova1@prova.it','utente1@mail.com','utente2@mail.it']
let userEmail = prompt('Inserisci la tua email')
console.log(savedEmail)
console.log(userEmail)


// METODO CON IF
if (savedEmail.includes(userEmail)) {
    console.log('la mail è presente nell\'elenco')
    console.log('La tua email', userEmail, 'può accedere')
    // let userEmail = prompt('inserisci un\'altra email')
} else {
    console.log('la mail', userEmail ,'non è presente nella lista')
    console.log('La tua email', userEmail, 'non può accedere')
    
}



// // METODO CON FOR
// let i= userEmail
// for(i=0; i<savedEmail.length; i=i++){
//     if(savedEmail[i] == userEmail){
//         console.log('la mail è già presente')
//     } else{
//         savedEmail.push(userEmail)
//         console.log('la mail', userEmail ,'è stata salvata correttamente')
//     }
// }