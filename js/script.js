var nameInput = prompt('Inserisci il tuo nome:');
var surnameInput = prompt('Inserisci il tuo cognome;');
var favoriteColor = prompt('Inserisci il tuo colore preferito:');

document.getElementById('input-text-name').innerHTML = "Nome inserito: " + nameInput + ".";
document.getElementById('input-text-surname').innerHTML = "Cognome inserito: " + surnameInput + ".";
document.getElementById('input-text-color').innerHTML = "Colore preferito: " + favoriteColor + ".";

document.getElementById('password').innerHTML = "La tua password 'molto' sicura e affidabile è '" + nameInput + surnameInput + favoriteColor + "21'. (Ricorda: non fornire mai a nessuno la tua password ultrasupersegretissima.)";