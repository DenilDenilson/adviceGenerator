import Home from '../pages/home';

// const routes = {
//     '/': Home,
//     '/:id': 
// }

// const router = async () => {
//     const home = null || document.querySelector(.main);

//     home.innerHTML = await Home();
// }

// export default router;

async function router() {
    const home = null || document.querySelector('.main');

    home.innerHTML = await Home();
}

export default router;