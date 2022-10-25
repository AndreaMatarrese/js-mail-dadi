console.log('la tua mail')
const savedEmail = ['prova1@email.com', 'email2@prova.it','emailprova1@prova.it','utente1@mail.com','utente2@mail.it']
let userEmail = prompt('Inserisci la tua email')
console.log(savedEmail)
console.log(userEmail)


// METODO CON IF
if (savedEmail.includes(userEmail)) {
    console.log('la mail è già presente')
    let userEmail = prompt('inserisci un\'altra email')
} else {
    savedEmail.push(userEmail)
    console.log('la mail', userEmail ,'è stata salvata correttamente')
    // let userEmail = prompt('Aggiungi ulteriore email')

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