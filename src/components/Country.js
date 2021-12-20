import React from 'react';

/*Ya solo resta crear el componente  Podemos crearlo como un 
componente sin estado el cual recibirá las props enviadas desde el componente 
/component/Getcountries.js y renderizar los datos: */

function Country(props){
    return(
        <React.Fragment>
            <div key={props.indice}>
                    <h1>Pais: {props.caracteristica.name.official}</h1>
                    <h2>Capital: {props.caracteristica.capital}</h2>
                    <h3>Bandera: {props.caracteristica.flag}</h3>
            </div>
        </React.Fragment>
    )
}
export default Country;