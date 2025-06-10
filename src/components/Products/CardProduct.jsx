import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart/cartSlice";
import {
  Card,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  AddToCartButton,
  ProductDesc,
  Notification
} from "./CardsProductsStyles";
import { formatPrice } from "../../utils/formatPrice";

function CardProduct({ id, img, name, desc, price }) {
  const dispatch = useDispatch();

  // Estado para la notificación
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    // Agregar el producto al carrito
    dispatch(addToCart({ id, img, name, desc, price }));

    // Mostrar la notificación
    setShowNotification(true);

    // Ocultar la notificación después de 2 segundos
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={img} alt={name} />
        <AddToCartButton onClick={handleAddToCart}>
          Agregar al carrito
        </AddToCartButton>
      </ImageContainer>

      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductDesc>{desc}</ProductDesc>
        <ProductPrice>{formatPrice(price)}</ProductPrice>
      </ProductInfo>

      
      {showNotification && (
        <Notification>
          ¡Producto agregado al carrito!
        </Notification>
      )}
    </Card>
  );
}

export default CardProduct;
