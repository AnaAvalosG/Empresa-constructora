import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinkItems.module.css"

// eslint-disable-next-line react/prop-types
function NavLinkItems({ to, children }) {

    return (

        <NavLink to={to} className={({ isActive }) => isActive ? styles.active : ""}>

            {children}

        </NavLink>
    )
}

export default NavLinkItems;