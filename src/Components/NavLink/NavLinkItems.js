import React, { Children } from "react";
import { NavLink } from "react-router-dom";
const NavLinkItems = ({to, children}) => {
 return(
    <NavLink to={to}className={({ isActive }) => (isActive ? "aticve" : "")}>
        {children}
    </NavLink>
 )
}

export default NavLinkItems;