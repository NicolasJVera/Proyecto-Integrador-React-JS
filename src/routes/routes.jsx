import { Routes as ReactDomRoutes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Productos/Productos";
import NotFound from "../pages/NotFound/NotFound";

function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </ReactDomRoutes>
  );
}

export default Routes;
