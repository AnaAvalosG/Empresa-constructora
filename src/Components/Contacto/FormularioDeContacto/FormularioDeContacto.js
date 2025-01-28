import React, { useState } from "react";
import { db } from "../EnviarFormulario/FireBaseConfig";
import { collection, addDoc } from "firebase/firestore";
import InputMensajeFormulario from "../Mensaje-usuario-formulario/InputMensajeFormulario";
import styles from "./FormularioDeContacto.module.css";
import { enviarEmail } from "../EmailMensajeRecibido/Email";

function FormularioDeContacto() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addDoc(collection(db, "emails"), {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                mensaje: mensaje,
                timestamp: new Date()
            });

            enviarEmail(email, nombre);
            setNombre('');
            setApellido('');
            setEmail('');
            setTelefono('');
            setMensaje('');

        } catch (error) {

            console.error("Error al enviar el formulario: ", error);

        }
    };

    return (

        <div>

            <div className={styles['contenedor-form']}>
                
                <form onSubmit={handleSubmit}>

                    <fieldset className={styles['fieldset-contenedor-informacion-personal']} name="informacion persona">

                        <legend className={styles['contenedor-informacion-personal']}>
                            Información personal
                        </legend>

                        <input
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            placeholder="Apellido"
                            name="apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                        <br />

                        <input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            placeholder="Telefono"
                            name="telefono"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />

                    </fieldset>

                    <fieldset name="escribir mensaje">

                        <legend>
                            Su mensaje
                        </legend>

                        <InputMensajeFormulario
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        />

                    </fieldset>

                    <button
                        type="submit"
                        name="boton"
                        className={styles['boton-enviar-form']}>
                        Enviar
                    </button>

                </form>
            </div>
        </div>

    );
}

export default FormularioDeContacto;
