import styled from "styled-components";
import '../../index.css'

export const FeedContainer = styled.div`
  height: 640px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContainerTitle = styled.div`
  width: 360px;
  height: 64px;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px #DCDCDC;
`

export const Title = styled.div`
  width: 175px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  p {
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: -0.39px;
    color: var(--black);
  }

  img {
    position: absolute;
    padding-right: 300px;
  }
`

export const Search = styled.div`
  width: 328px;
  height: 56px;
  margin: 8px 16px;
  border: 1px solid #b8b8b8;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    height: 100%;
    border: none;
    background: transparent;
    padding: 0 10px;
    font-size: 16px;
  }

  input::-webkit-input-placeholder {
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #d0d0d0;
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0 10px;
  }
`

export const SectionRestaurant = styled.div`
  width: 360px;
  margin-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 56px;

  p {
    width: 296px;
    height: 18px;
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
  }
`

export const RestaurantContainer = styled.div`
  width: 360px;
  height: 196px;
  padding: 8px 16px;
`

export const RestaurantCard = styled.div`
  width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  img {
    width: 328px;
    height: 120px;
    object-fit: contain;
  }

  p {
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #e86e5a;
    margin-left: -90px;
    padding: 8px 0;
  }

  article {
    display: flex;
    justify-content: space-between;
    margin: 16px 16px;
  }

  span {
    font-family: "Roboto";
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
`