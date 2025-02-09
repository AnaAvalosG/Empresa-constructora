import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import styles from "./ConsentimientoCookies.module.css"

function ConsentimientoCookies() {
    const [consentidas, setConsentidas] = useState(false)


    useEffect(() => {
        const consentimiento = Cookies.get('consentimientoCookies');
        if (consentimiento) {
            setConsentidas(true);
        }

    }, [])


    function darConsentimiento() {
        Cookies.set('consentimientoCookies', 'true', { expires: 365 });
        setConsentidas(true);
    }

    if (consentidas) {
        return null;
    }


    return (
        <div className={styles['consentimiento-cookie']}>

            <p>
                Usamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestro uso de cookies.
            </p>

            <button onClick={darConsentimiento}>
                Aceptar
            </button>

        </div>
    );
}

export default ConsentimientoCookies


