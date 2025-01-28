import styles from "../Contacto-asuntos-legales/ContactoAsuntosLegales.module.css"
import React from "react";
function ContactoAvisoLegal() {
    return (
        <div>
            <h3>
                Información General:
            </h3>
            <p>
                Dirección:
                <span className={styles['informacion-empresa']}>
                    Calle siempre viva 43
                </span>

            </p>

            <p>
                Número de teléfono:
                <span className={styles['informacion-empresa']}>
                    +54 549 212 239
                </span>

            </p>

            <p>
                Correo Electrónico:
                <span className={styles['informacion-empresa']}>
                    recoconstrucciones@gmail.com
                </span>

            </p>
            <p>

                CIF:
                <span className={styles['informacion-empresa']}>
                    A12345678
                </span>

            </p>
        </div>
    )
}

export default ContactoAvisoLegal;