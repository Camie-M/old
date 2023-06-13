import styled from "styled-components";

export const ContentBox = styled.div``;

export const Title = styled.div`
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  #addressTitle {
    color: #b8b8b8;
  }
`;

export const OrderHistory = styled.div`
  margin: 16px 16px 0px 16px;

  p {
    margin-bottom: 8px;
  }

  .orderData {
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin-top: 8px;
  }

  .orderData div {
    margin: 16px;
  }

  #restaurantName {
    color: #e86e5a;
  }

  #dateInfo {
    font-size: 12px;
  }

  #totalPrice {
    font-size: 16px;
    font-weight: bold;
    margin-top: 7px;
  }
`;

export const EmptyHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;
