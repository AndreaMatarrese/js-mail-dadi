const savedEmail = ['prova1@email.com', 'email2@prova.it','emailprova1@prova.it','utente1@mail.com','utente2@mail.it']
const userEmail = prompt('Inserisci la tua email')

console.log('salva la tua mail')

if (savedEmail.includes(userEmail)) {
    console.log('la mail è già presente')
    let userEmail = prompt('inserisci un\'altra email')
} else {
    savedEmail.push(userEmail)
    console.log('la mail', userEmail ,'è stata salvata correttamente')
    // let userEmail = prompt('Aggiungi ulteriore email')

}
