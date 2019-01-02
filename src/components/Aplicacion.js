import React from 'react';
import Productos from "./Productos";
import Footer from './Footer';

class Aplicacion extends React.Component{
    render() {
        return (
            <div>
                <h1>Tienda Virtual</h1>
                <Productos/>
                <Footer />
            </div>
        );
    }
}

export default Aplicacion;