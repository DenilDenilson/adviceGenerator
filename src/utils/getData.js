// const API = 'https://api.adviceslip.com/advice';
// const xhr = new XMLHttpRequest();

// xhr.addEventListener('load', () => {
//     let respuesta;
//     if (xhr.status === 200) respuesta = xhr.response;
//     else respuesta = "Algo salio mal";
//     console.log(respuesta);
// });
// xhr.open('GET', `${API}`);
// xhr.send();

// #####################

const API = 'https://api.adviceslip.com/advice';

const getData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Fetch Error", error);
    };
};

export default getData;



// ###############

// const API = 'https://api.adviceslip.com/advice';

// const xhr = new XMLHttpRequest();

// function OnRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         const data = JSON.parse(this.response);
//         console.log(data.slip.id); console.log(data.slip.advice);
//         //console.log(data.slip_id);
//         //console.log(data.advice);
//         //console.log(JSON.parse(this.response).advice);
//     }
// };

// xhr.addEventListener('load', OnRequestHandler);
// xhr.open('GET', `${API}`);
// xhr.send();

// console.log(data.id);
// console.log(data.advice);

// ###############