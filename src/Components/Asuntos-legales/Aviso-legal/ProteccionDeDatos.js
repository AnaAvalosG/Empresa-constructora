import { NavLink } from "react-router-dom";

function ProteccionDeDatos(){
    return(
        <div>
            <h3>Protección de Datos:</h3>
                <p>
                    Protección de Datos Reco cumple con la normativa vigente en materia de
                    protección de datos de carácter personal y garantiza el cumplimiento íntegro
                    de las obligaciones dispuestas, así como la implementación de las medidas de
                    seguridad que contempla el Reglamento Europeo 2016/679 del Parlamento Europeo
                    y del Consejo, de 27 de abril de 2016.

                </p>
                <p>
                    Visualizar <NavLink to={"/politicas-de-cookies"}> Politica de cookies</NavLink>
                </p>
        </div>
    )
}

export default ProteccionDeDatos;