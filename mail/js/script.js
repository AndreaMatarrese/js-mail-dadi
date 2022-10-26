console.log('la tua mail')

const savedEmail = [
    'prova1@email.com',
     'email2@prova.it',
     'emailprova1@prova.it',
     'utente1@mail.com',
     'utente2@mail.it']

const userEmail = document.getElementById('email')
const eleResult = document.getElementById('response')
const btnVerify = document.getElementById('verify')

btnVerify.addEventListener('click', function(){
    
    let emailChecked = false;
    for(i=0; i<savedEmail.length; i++){

        if(userEmail.value === savedEmail[i]){
            emailChecked = true;
            console.log('trovata');
        }
        console.log('non trovata'); 
    }   

    if (emailChecked){
        eleResult.innerHTML='Email TROVATA'
    } else {
        eleResult.innerHTML='Email NON trovata'
    }

    
});
