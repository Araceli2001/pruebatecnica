const axios = require('axios');


 async function products() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        

        const order = response.data.sort((a, b) => 
            a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        );

        console.log(order)
        return order;

    } catch (error) {
        console.error('Error en la solicitud:', error); 
        throw error; 
    }

}

products()


async function rating() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        
        const order = response.data.filter(product => product.rating.rate > 3 )

        console.log(order)
        return order;

    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; 
    }

}

rating()

async function addElectronics() {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        
        const electronics = response.data.reduce((accumulator, product) => {
            if (product.category === 'electronics') {
                accumulator.push(product);
            }
            return accumulator;
        }, []);

        console.log(electronics)

    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; 
    }

}

addElectronics()