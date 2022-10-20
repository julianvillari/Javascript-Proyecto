const obtenerProductos = async () => {
    try {
        const response = await fetch('./src/data/stock.json');
        const data = await response.json();

        return data;

    } catch (error) {
        
    };
};

export { obtenerProductos }