const contactButton= document.querySelector('.header__contact-button');

document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.querySelector('.header__contact-button'); // Asegúrate de seleccionar el botón correcto
    const contactChatContainer = document.querySelector('.chat__contact-container');
    const contactChatTemplate = document.querySelector('#contact__chat');

    contactButton.addEventListener('click', () => {
        const userConfirmed = confirm('Do you want to contact us?');
    });
});


const suscriptionButton = document.querySelector('.header__navigation_button-suscription');
const containerForm = document.querySelector('.form__container');
const formTemplate = document.querySelector('#suscription__form');

suscriptionButton.addEventListener('click', () => {
    const existingForm = containerForm.querySelector('.suscription__form');

    
    if (!existingForm) { // Si no existe, lo agregamos
        const formClone = formTemplate.content.cloneNode(true);
        containerForm.appendChild(formClone);
    }
});

const closeFormButton = containerForm.querySelector('.form__close-button');

closeFormButton.addEventListener('click', () => {
    containerForm.removeChild(containerForm.querySelector('.suscription__form'));
});


// vamos a poner en practica  eventos de teclado 

const input = document.querySelector('input__name');
input.addEventListener('keydown', function(event) {
    console.log('cada vez que presionas una tecla me registro ');
});