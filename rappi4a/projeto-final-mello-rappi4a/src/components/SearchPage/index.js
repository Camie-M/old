import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { 
  FeedContainer,
  ContainerTitle,
  Search,
  Title,
  SectionRestaurant,
  RestaurantContainer,
  RestaurantCard
} from "./styles"

import searchIcon from "../../assets/search.svg"
import arrow_back from "../../assets/arrow_back.svg"

function SearchPage() {
  let history = useHistory();
  const [restaurantList, setRestaurantList] = useState([])
  const [searchRestaurant, setSearchRestaurant] = useState("")
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants"

  useEffect(() => {
    getRestaurantList();
  }, []);

  const handleRestaurant = (event) => {
    setSearchRestaurant(event.target.value)
  }

  const getRestaurantList = async () => {
    const token = JSON.parse(localStorage.getItem("rappi4")).token

    try {
      const axiosConfig = {
        headers: {
          auth: token
        } 
      } 

      const response = await axios.get(`${baseUrl}`, axiosConfig)

      setRestaurantList(response.data.restaurants)
    } catch (e) {
      alert("Lista de restaurantes falhou :(")
    }
  }

  const filteredRestaurantList = restaurantList.filter(item => item.name === searchRestaurant)

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const goToRestaurantPage = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (    
    <FeedContainer>
      <ContainerTitle>
        <Title>
          <img src={arrow_back} onClick={goToFeedPage} alt="Ícone voltar"/>
          <p>Busca</p>
        </Title>
      </ContainerTitle>
      <Search>
        <img src={searchIcon} alt="Ícone de busca"/>
        <input
          type="text"
          value={searchRestaurant}
          onChange={handleRestaurant}
          placeholder="Restaurante"
        />
      </Search>
      <SectionRestaurant>
        {searchRestaurant === "" ? <p>Busque por nome de restaurante</p> : <div />}
        {filteredRestaurantList.length !== 0 || searchRestaurant === "" ? filteredRestaurantList.map(item => {
          return (
            <RestaurantContainer key={item.id} onClick={() => goToRestaurantPage(item.id)} >
              <RestaurantCard>
                <img src={item.logoUrl} alt="Logo do restaurante" />
                <p>{item.name}</p>
                <article>
                  <span>{item.deliveryTime} - {item.deliveryTime + 10} min</span>
                  <span>Frete R$6,00</span>
                </article>
              </RestaurantCard>
            </RestaurantContainer> 
          )
        })  
        :
        <p>Não encontramos :(</p>
        }
      </SectionRestaurant>
    </FeedContainer>
  );
}

export default SearchPage;
