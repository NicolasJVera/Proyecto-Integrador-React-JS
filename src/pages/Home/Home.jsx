import Hero from "../../components/Hero/Hero";
import Coleccion from "../Coleccion/Coleccion";
import Contacto from "../Contacto/Contacto";
import Nosotros from "../Nosotros/Nosotros";
import Productos from "../Productos/Productos";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { pathname } = useLocation();

  // Efecto para reiniciar el scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Hero />

      <section id="coleccion">
        <Coleccion />
      </section>

      <section id="productos">
        <Productos />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="contacto">
        <Contacto />
      </section>
    </>
  );
}

export default Home;
