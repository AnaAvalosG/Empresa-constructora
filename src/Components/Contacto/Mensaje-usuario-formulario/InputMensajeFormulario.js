import React, { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./InputMensajeFormulario.module.css";

function InputMensajeFormulario({ onChange }) {
  const [valorInput, setValorInput] = useState('');

  const cambiarValorInput = (e) => {
    const valorDelInput = e.target.value;

    if (valorDelInput.length > (e.target.maxLength * 0.95)) {
      setValorInput(valorDelInput);
    } else {
      setValorInput(valorDelInput);
    }

    onChange(e); // Llamar a la función onChange proporcionada por las props
  };

  return (
    <textarea
      className={styles['input']}
      value={valorInput}
      onChange={cambiarValorInput}
      rows={10}
      maxLength={1000}
    />
  );
}

InputMensajeFormulario.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default InputMensajeFormulario;
