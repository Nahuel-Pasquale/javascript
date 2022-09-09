// los render, verificar el localstorage y la funcion init

const cardsContainer = document.getElementById('cards-container');
const form = document.getElementById('form');

let agenda = JSON.parse(localStorage.getItem('agenda')) || []; // obtenemos los datos del localstorage o creamos un arreglo vacio

const saveLocalStorage = () => { // funcion para guardar en el localstorage
    localStorage.setItem('agenda', JSON.stringify(agenda)) // guardamos el arreglo agenda en el localstorage
};

const saveData = () => {
    agenda = [ // creamos un nuevo arreglo
        ...agenda, // con los datos anteriores
        { // y agregamos el nuevo turno
            id: agenda.length + 1,
            name: nameInput.value,
            surname: surnameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            date:  formatDate(dateInput.value),
            time: hourInput.value,
            quantity: getRadioValue(radioInputs),
            extras: getCheckedOptions(checkboxInputs),
            about: aboutInput.value,
        }
    ]
}

const renderTurn = (turn) => {
    // va a renderizar nuestro turno
    // console.log(turn)
    const { id, name, surname, phone, email, date, time, quantity, extras } = turn; // destructuring
    return ` 
        <div class="card ${setCardBackground(quantity)}">
        <div class="card__left">
            <h2 class="card__title"> ORDEN: N°${id} - ${name} ${surname}</h2>
            <p class="card__qty"> ${quantity} </p>
            <p class="card__extras"> Extras: ${extras} </p>
            <div class="tags">
              <span class="card__hour ${setTimeBackground(quantity)}"> ${time} HS</span>
              <span class="card__date ${setDateBackground(quantity)}"> ${date} </span>
            </div>
        </div>
        <div class="card__right">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"> <i class="fa-solid fa-envelope"></i> </a>
          <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"> <i class="fa-solid fa-phone-flip"></i> </a>
          <img src=${setCardImg(quantity)} class="card__img ${setCardImgClass(quantity)}" alt="imagen">
        </div>
        </div>
    `
}

const renderAgenda = () => {
    cardsContainer.innerHTML = agenda.map((turn) => renderTurn(turn)).join('');
}

const submitForm = (e) => {
    e.preventDefault(); // evitamos que se recargue la pagina
    if(isValidForm()) { // si el formulario es valido
        saveData(); // guardamos los datos
        form.reset(); // reseteamos el formulario
        saveLocalStorage(); // guardamos en el localstorage
        renderAgenda(); // renderizamos la agenda
        setDateIntervals(); // seteamos los limites de la fecha
    }
}

const init = () => {
    renderAgenda();
    // al cargar la pagina se setee los limites de la fecha del input
    window.addEventListener('DOMContentLoaded', setDateIntervals); // al cargar la pagina se setean los limites de la fecha del input
    form.addEventListener('submit', submitForm); // al enviar el formulario se ejecuta la funcion submitForm
}

init();

