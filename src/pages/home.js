import getData from "../utils/getData";

const Home = async () => {
    const datosApi = await getData();
    const number = datosApi.slip.id;
    const advice = datosApi.slip.advice;
    const view = `
        <h1 class="advice_number">ADVICE # ${number}</h1>
        <p class="advice_content">"${advice}"</p>
        
        
    `;
    return view;
}

export default Home; 