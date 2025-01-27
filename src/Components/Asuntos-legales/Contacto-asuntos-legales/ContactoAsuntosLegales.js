import styles from "./ContactoAsuntosLegales.module.css"


function ContactoAsuntosLegales(){
    return(
        <div>
            <ul>
                    <li>
                        Nombre de la Empresa: <span className={styles['informacion-empresa']}> Reco construcciones</span>
                    </li>
                    <li>
                        Dirección:  <span className={styles['informacion-empresa']}> Calle siempre viva 43</span>
                    </li>
                    <li>
                        Correo Electrónico:
                        <span className={styles['informacion-empresa']}>recoconstrucciones@gmail.com</span>
                    </li>
                    <li>
                        Número de teléfono: <span className={styles['informacion-empresa']}>+54 549 212 239</span>
                    </li>
                    <li>
                      CIF: <span className={styles['informacion-empresa']}>A12345678</span>
                    </li>
                   
               
                </ul>
        </div>
    )

}

export default ContactoAsuntosLegales;



