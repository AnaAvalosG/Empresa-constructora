import React from 'react';
const PaginaActiva = ({isActive}) => {
    return(
       isActive ? 'active' : 'inactive'
    )
}

export default PaginaActiva;