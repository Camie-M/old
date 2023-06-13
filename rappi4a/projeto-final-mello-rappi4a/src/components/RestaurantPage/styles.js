import styled from "styled-components";

export const Title = styled.div`
  height: 44px;
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
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
  margin: 16px;
`;

export const RestaurantDeliveryPrice = styled.span`
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
  margin: 16px 0 8px 0;
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

export const RestaurantCategory = styled.div`
  width: 104px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin: 4px 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;

export const RestaurantDetailPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  width: 360px;
  height: 120px;
`;

export const ProductCard = styled.div`
  width: 328px;
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

export const AddToCartButton = styled.button`
  min-width: 20%;
  margin-top: 20px;
`;
export const Select = styled.select`
  min-width: 90%;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddToCart = styled.p`
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

export const AddToCartContainer = styled.div`
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

export const ProductCategory = styled.p`
  width: 328px;
  height: 18px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  margin: 8px 16px;
`;

export const ProductCategoryBar = styled.hr`
  margin: 8px 0;
`;

export const ProductQuantityContainer = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 0px 8px 0px 8px;
  border: solid 1px #e86e5a;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductQuantity = styled.p`
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
  color: #e86e5a;
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
