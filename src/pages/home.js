import getData from "../utils/getData";

const Home = async () => {
    const datosApi = await getData();
    const number = datosApi.slip.id;
    const advice = datosApi.slip.advice;
    const view = `
        <h1 class="advice_number">${number}</h1>
        <p class="advice_content">${advice}</p>
        <img src="image_sep" alt="Imagen decoratica">
        <img src="image_dado" alt="Dado para cambiar de frase">
    `;
    return view;
}

export default Home;