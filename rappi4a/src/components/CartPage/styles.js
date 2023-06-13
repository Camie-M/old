import styled from "styled-components";

export const CartPageContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export const Title = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 16px 16px 0px 16px;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;

    margin-bottom: 8px;
  }
`;

export const AddressInfo = styled(ProfileInfo)`
  margin: 0px;
  padding: 16px;
  background-color: #eeeeee;
  margin-bottom: 16px;

  #addressTitle {
    color: #b8b8b8;
  }
`;

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px;
  width: 360px;
`;

export const RestaurantTitle = styled.p`
  width: 328px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
  margin: 8px 16px;
`;

export const RestaurantDeliveryTime = styled.span`
  width: 104px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 8px 16px;
`;

export const RestaurantAdress = styled.p`
  width: 328px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 4px 16px;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaymentMethodContainer = styled.div`
  position: absolute;
  bottom: 49px;
  width: 100vw;
`;

export const PaymentMethodTitle = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: left;
    color: black;
    margin: 0 0 0 16px;
  }
`;

export const PaymentMethod = styled.div`
  div {
    margin: 16px;
  }

  input {
    margin: 0 4px 0 0;
  }
  input:checked {
    margin: 0 4px 0 0;
    color: black;
  }

  label {
    width: 296px;
    height: 18px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }
`;

export const ConfirmButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #e86e5a;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    margin: 16px 0;
    border: none;
    cursor: pointer;
  }
`;
export const ProductCard = styled.div`
  width: 100vw;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 0 16px;
  display: flex;
  position: relative;
`;

export const RestaurantLogo = styled.img`
  width: 328px;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 16px;
`;

export const ProductContainer = styled.div`
  width: 360px;
  height: 120px;
`;

export const ProductImage = styled.img`
  max-width: 35%;
  max-height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #d8d8d8;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ProductTitle = styled.p`
  width: 166px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
`;

export const ProductDescriptionContainer = styled.div`
  padding: 15px;
`;

export const ProductDescription = styled.p`
  width: 198px;
  height: 30px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
`;

export const ProductPrice = styled.p`
  width: 108px;
  height: 19px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  padding: 10px 0 0 0;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const ProductQuantityContainerAdded = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 0px 8px 0px 8px;
  border: solid 1px #e02020;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantityAdded = styled.p`
  width: 9px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #e02020;
`;

export const RemoveFromCart = styled.p`
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

export const RemoveFromCartContainer = styled.div`
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

export const ShippingFeeContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  margin: 16px;

  p {
    width: 104px;
    height: 18px;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: black;
  }
`;

export const SubtotalContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 16px;
  position: absolute;
  bottom: 250px;
  width: 100vw;

  p {
    width: 164px;
    height: 18px;
    font-family: "Roboto";
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
  }

  span {
    width: 164px;
    height: 21px;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e86e5a;
  }
`;
