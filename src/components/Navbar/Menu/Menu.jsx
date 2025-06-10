import { MenuLabel, MenuIcon, NavList, NavItem, NavLink } from "./MenuStyles";
import { useState } from "react";
import menuIcon from "/icons/menu.svg";

const Menu = ({ isOpen, onToggleMenu }) => {
  const [activeLink, setActiveLink] = useState("home");

  // Función para manejar el cambio de activo y cerrar el menú
  const handleSetActive = (to) => {
    setActiveLink(to);
    onToggleMenu(); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <>
      <MenuLabel onClick={onToggleMenu}>
        <MenuIcon src={menuIcon} alt="Menú" />
      </MenuLabel>
      <NavList className={isOpen ? "open-menu" : ""}>
        <NavItem>
          <NavLink
            to="home"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "home" ? "active-link" : ""}`}
            onClick={(e) => handleSetActive("home", e)}
          >
            Home
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            to="coleccion"
            smooth={true}
            duration={500}
            offset={-147}
            className={`nav-link ${activeLink === "coleccion" ? "active-link" : ""}`}
            onClick={(e) => handleSetActive("coleccion", e)} 
          >
            Colecciones
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            to="productos"
            smooth={true}
            duration={500}
            className={`nav-link ${activeLink === "productos" ? "active-link" : ""}`}
            onClick={(e) => handleSetActive("productos", e)} 
          >
            Productos
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="nosotros"
            smooth={true}
            duration={500}
            offset={-147}
            className={`nav-link ${activeLink === "nosotros" ? "active-link" : ""}`}
            onClick={(e) => handleSetActive("nosotros", e)} 
          >
            Nosotros
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            to="contacto"
            smooth={true}
            duration={500}
            offset={200}
            className={`nav-link ${activeLink === "contacto" ? "active-link" : ""}`}
            onClick={(e) => handleSetActive("contacto", e)} 
          >
            Contacto
          </NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default Menu;
