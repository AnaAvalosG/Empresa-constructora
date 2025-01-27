import React, { useState } from "react";
import styles from "./InputMensajeFormulario.module.css"

function InputMensajeFormulario({value, onChange}) {
   
    const [valorInput, setValorInput] = useState('')

    const cambiarValorInput = (e) => {
        const valorDelInput = e.target.value

        if (valorDelInput.length > (e.target.maxLength * 0.95)) {
            
            setValorInput(valorDelInput);
        } else {
            setValorInput(valorDelInput)
        }
      }
      return(
        <textarea  
        className={styles['input']}
        value={value}
        onChange={onChange}
        rows={10} 
        maxLength={1000}
        />
      )
}

export default InputMensajeFormulario;