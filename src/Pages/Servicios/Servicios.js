// donde los usuarios puedan ver cuáles son los servicios
// que ofrecen como profesionales del sector.
import styles from "./Servicios.module.css"
import { NavLink } from "react-router-dom";
import ConsultoriaYAsesoramiento from "../../Components/ServiciosOfrecidos/ConsultoriaYAsesoramiento/ConsultoriaYAsesoramiento";
import InteriorYDecoracion from "../../Components/ServiciosOfrecidos/InteriorYDecoracion/InteriorYDecoracion";
import Mantenimiento from "../../Components/ServiciosOfrecidos/Mantenimiento/Mantenimiento";
import PermisosYLicencias from "../../Components/ServiciosOfrecidos/PermisosYLicencias/PermisosYLicencias";
import PlanificacionDelProyecto from "../../Components/ServiciosOfrecidos/PlanificacionDelProyecto/PlanificacionDelProyecto";
const Servicios = () => {
    return (
        <div >
            <h1 className={styles['h1-titulo-servicios']}>Nuestros servicios</h1>
            <div className={styles['contenedor-servicios']}>
                <ConsultoriaYAsesoramiento />

                <PlanificacionDelProyecto />

                <PermisosYLicencias />

                <InteriorYDecoracion />

                <Mantenimiento />
            </div>
            <div>
                <button>
                    <NavLink to="/contacto" className={styles['boton-hacia-contacto']}>
                        Contactanos
                    </NavLink>
                </button>
            </div>

        </div>

    )
}

export default Servicios;
