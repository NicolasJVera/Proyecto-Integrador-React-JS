import Categories from "../../components/Categories/Categories"
import CardsProducts from "../../components/Products/CardsProducts"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Productos() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
        <Categories />;
        <CardsProducts />;
    </>
  )
}

export default Productos
