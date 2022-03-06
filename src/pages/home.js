import getData from "../utils/getData";

const Home = async () => {
    const datosApi = await getData();
    const number = datosApi.slip.id;
    const advice = datosApi.slip.advice;
    const view = `
        <h1 class="advice_number">Advice # ${number}</h1>
        <p class="advice_content">${advice}</p>
        <img class="image_sep" src="../../images/pattern-divider-mobile.svg" alt="Imagen decoratica">
        <img class="image_dado" src=""../../images/icon-dice.svg"" alt="Dado para cambiar de frase">
    `;
    return view;
}

export default Home;