import React from "react";
import { useHistory } from "react-router-dom";

import { RestaurantContainer, RestaurantCard } from "./styles"

const CardRestaurant = (props) => {
  const history = useHistory();

  const goToRestaurantPage = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };
  
  return (
      <RestaurantContainer>
        <RestaurantCard onClick={(() => goToRestaurantPage(props.id))} >
          <img src={props.logoUrl} alt="Logo do restaurante" />
          <p>{props.name}</p>
          <article>
            <span>{props.deliveryTime} - {props.deliveryTime + 10} min</span>
            <span>R${props.shipping.toFixed(2)}</span>
          </article>
        </RestaurantCard>
      </RestaurantContainer>
  )    
}

export default CardRestaurant;