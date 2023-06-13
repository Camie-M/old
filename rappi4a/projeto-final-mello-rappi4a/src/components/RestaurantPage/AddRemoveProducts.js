import React, { useContext } from "react";
import styled from "styled-components";
import cartContext from "../../context/CartContext";

const AddToCart = styled.p`
  width: 48px;
  height: 14px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: black;
  cursor: pointer;
`;

const AddToCartContainer = styled.div`
  width: 90px;
  height: 31px;
  border-radius: 8px 0px 8px 0;
  border: solid 1px black;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

const RemoveFromCart = styled.p`
  width: 48px;
  height: 14px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  text-align: center;
  color: #e02020;
  cursor: pointer;
`;

const RemoveFromCartContainer = styled.div`
  width: 90px;
  height: 31px;
  border-radius: 8px 0px 8px 0;
  border: solid 1px #e02020;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;

function AddRemoveProducts(props) {
  const { cart, dispatch } = useContext(cartContext);

  const render =
    props.quantity >= 1 ? (
      <RemoveFromCartContainer>
        <RemoveFromCart onClick={() => props.removeFromCart(props.id)}>
          Remover
        </RemoveFromCart>
      </RemoveFromCartContainer>
    ) : (
      <AddToCartContainer>
        <AddToCart onClick={() => props.addProductToCart(props.product)}>
          Adicionar
        </AddToCart>
      </AddToCartContainer>
    );

  return <div>{render}</div>;
}

export default AddRemoveProducts;
