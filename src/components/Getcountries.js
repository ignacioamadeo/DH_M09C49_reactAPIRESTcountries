//Importo la funcionalidad Component de react, para componentes con estado:
import React, { Component } from 'react';

//Para renderizar cada país individual utilizaré el archivo "Country":
import Country from './Country.js';

//Inicio el componente statefull:
class Getcountries extends Component {

    /*Configuramos el estado inicial del componente para que pueda almacenar la información de la API 
    luego de hacer el fetch: */

    constructor(props) {
        super(props);
        this.state = {
            countriesList: []
        }
    }

    /*FETCH: Ahora debemos establecer la conexión con la API con fetch. Esto lo debemos programar 
    en el momento en que el componente se monte, valiéndonos del método componentDidMount(): */

    componentDidMount() {
        fetch('https://restcountries.com/v3.1/all')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(data => {
                console.log(data)
                this.setState({ countriesList: data })
            })
            .catch(error => { console.log(error) })
    }

    /* RENDER: Ahora debemos proceder a renderizar lo que se le mostrará al usuario de forma dinámica:  
    */
    render() {
        if (this.state.countriesList.length == 0) {
            return (<h1> Cargando paises...</h1>)
        } else {
            //Hago un map para recorrer el array que trae el estado. Y renderizo el componente "Country" que se importó al principio:
            return (
                <div>
                    {this.state.countriesList.map((country, i) => <Country caracteristica={country} indice={i} />)}
                </div>
            )
        }

    }

}

export default Getcountries