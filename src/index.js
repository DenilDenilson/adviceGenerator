import router from './routes';

window.addEventListener('load', router);

// const button = document.querySelector(".image_dado-content");

// function reload() {
//     location.reload();
// }

// button.addEventListener("click", reload);





const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
    location.reload();
});