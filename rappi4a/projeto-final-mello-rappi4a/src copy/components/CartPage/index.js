import React, { useState, useEffect, useReducer, useContext } from "react";
import {
  Title,
  AddressInfo,
  LoadingContainer,
  PaymentMethodTitle,
  PaymentMethod,
  CartPageContainer,
  PaymentMethodContainer,
  ConfirmButton,
  ProductDescription,
  ProductCard,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  EmptyCartContainer,
  ProductQuantityContainerAdded,
  ProductQuantityAdded,
  RemoveFromCartContainer,
  RemoveFromCart,
  ShippingFeeContainer,
  SubtotalContainer,
  RestaurantContainer,
  RestaurantTitle,
  RestaurantAdress,
  RestaurantDeliveryTime,
} from "./styles";

import Footer from "../Footer/index";

import axios from "axios";
import ReactLoading from "react-loading";

import { fetchRestaurantDetail } from "../../functions/axios";
import CartContext from "../../context/CartContext";

function CartPage() {
  const cartContext = useContext(CartContext);

  const removeProductFromCart = (productId) => {
    cartContext.dispatch({ type: "REMOVE_FROM_CART", productId });
  };

  let totalValue = 0;

  cartContext.cart.forEach((product) => {
    totalValue = totalValue + product.price * product.quantity;
  });
  const [restaurantDetail, setRestaurantDetail] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl =
    "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

  const token = JSON.parse(localStorage.getItem("rappi4")).token;

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };
  const axiosToken = token;

  useEffect(() => {
    fetchDetails();
  }, [restaurantDetail]);

  const fetchDetails = async () => {
    const response = await fetchRestaurantDetail(
      cartContext.restaurantIdentification,
      axiosToken
    );
    setRestaurantDetail(response);
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${baseUrl}/profile`, axiosConfig);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const cartRender =
    cartContext.cart.length >= 1 ? (
      <div>
        {cartContext.cart.map((product) => {
          return (
            <div>
              <div>
                <RestaurantContainer>
                  <RestaurantTitle>
                    {restaurantDetail && restaurantDetail.restaurant.name}
                  </RestaurantTitle>
                  <RestaurantAdress>
                    {restaurantDetail && restaurantDetail.restaurant.address}
                  </RestaurantAdress>
                  <RestaurantDeliveryTime>
                    {restaurantDetail &&
                      restaurantDetail.restaurant.deliveryTime}{" "}
                    min
                  </RestaurantDeliveryTime>
                </RestaurantContainer>
              </div>
              <ProductContainer>
                <ProductCard>
                  <ProductImage src={product.photoUrl} />
                  <ProductDescription>
                    <ProductTitle>{product.name}</ProductTitle>
                    {product.description}
                    <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
                  </ProductDescription>
                  <RemoveFromCartContainer>
                    <RemoveFromCart
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      Remover
                    </RemoveFromCart>
                  </RemoveFromCartContainer>
                  <ProductQuantityContainerAdded>
                    <ProductQuantityAdded>
                      {product.quantity}
                    </ProductQuantityAdded>
                  </ProductQuantityContainerAdded>
                </ProductCard>
              </ProductContainer>
            </div>
          );
        })}
        <ShippingFeeContainer>
          <p>
            Frete R$
            {restaurantDetail &&
              restaurantDetail.restaurant.shipping.toFixed(2)}
          </p>
        </ShippingFeeContainer>
        <SubtotalContainer>
          <p>SUBTOTAL</p>
          <span>R$ {totalValue.toFixed(2)}</span>
        </SubtotalContainer>
      </div>
    ) : (
      <EmptyCartContainer>
        <p>Seu carrinho está vazio! </p>
      </EmptyCartContainer>
    );
  useEffect(() => {
    getProfile();
  }, []);

  const render = loading ? (
    <LoadingContainer>
      <ReactLoading type="spin" color="#ff3b30" />
    </LoadingContainer>
  ) : (
    <CartPageContainer>
      <Title>
        <p>Meu Carrinho</p>
      </Title>
      <AddressInfo>
        <div>
          <p id="addressTitle">Endereço cadastrado</p>
          {user.hasAddress === false ? (
            <p>Não há endereço cadastrado</p>
          ) : (
            <p>{user.address}</p>
          )}
        </div>
      </AddressInfo>
      {cartRender}
      <PaymentMethodContainer>
        <PaymentMethodTitle>
          <p>Forma de Pagamento</p>
        </PaymentMethodTitle>
        <PaymentMethod>
          <div>
            <input type="radio" value="money" id="money" name="payment" />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div>
            <input type="radio" value="creditCard" id="credit" name="payment" />
            <label htmlFor="credit">Cartão de Crédito</label>
          </div>
        </PaymentMethod>
        <ConfirmButton>
          <button>Confirmar</button>
        </ConfirmButton>
      </PaymentMethodContainer>
      <Footer />
    </CartPageContainer>
  );

  return <div>{render}</div>;
}

export default CartPage;
