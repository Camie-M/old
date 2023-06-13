import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CardRestaurant from "./CardRestaurant";
import Footer from "../Footer/index";

import searchIcon from "../../assets/search.svg";
import {
  FeedContainer,
  ContainerTitle,
  Title,
  Search,
  Filter,
  Label,
  SectionRestaurant,

} from "./styles"

function FeedPage() {
  const history = useHistory();
  const [restaurantList, setRestaurantList] = useState([])
  const [selectRestaurant, setSelectRestaurant] = useState()
  const [selectedCategory, setSeletectedCategory] = useState("")
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants"

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const token = JSON.parse(localStorage.getItem("rappi4")).token;

    try {
      const axiosConfig = {
        headers: {
          auth: token,
        },
      };

      const response = await axios.get(`${baseUrl}`, axiosConfig);

      setRestaurantList(response.data.restaurants);
    } catch (e) {
      alert("Lista de restaurantes falhou :(");
    }
  };

  const restaurantListFilter = restaurantList.filter((item, index, arr) => {
      
    return arr.map((mapItem) => mapItem['category']).indexOf(item['category']) === index
  })
  
  const handleCategories = () => {
    let categories = restaurantListFilter.map(item => {
      return item.category
    })
    return categories
  }
   
  let categoriesList = handleCategories()
  
  const handleClickCategory = (category) => {
    let chosenRestaurant = []
    
    restaurantList.forEach(restaurant => {

      if(category === restaurant.category && category !== selectedCategory) {
        setSeletectedCategory(category)
        chosenRestaurant.push(restaurant)
        setSelectRestaurant(chosenRestaurant)
      } else if(category === selectedCategory){
        setSeletectedCategory("")
        setSelectRestaurant(restaurantList)
      }
    })
    return chosenRestaurant  
  }

  const switchRestaurantsList = (list) => {
  
      const renderedList = list.map(restaurant => {
      return <CardRestaurant 
        key={restaurant.id}
        id={restaurant.id}
        logoUrl={restaurant.logoUrl}
        name={restaurant.name}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
      />  
    })
    return renderedList
  }
 
  const renderRestaurantsList = () => {
    let jsx
    switch (Boolean(selectedCategory)) {
      case false:
        jsx = switchRestaurantsList(restaurantList)
        return jsx;  
      case true :
        jsx = switchRestaurantsList(selectRestaurant) 
        return jsx;
      default:
        break;
    }
  }
  
  const goToSearchPage = () => {
    history.push("/search");
  };

  const goToRestaurantPage = (restaurantId) => {
    history.push(`/restaurant/${restaurantId}`);
  };

  return (
    <FeedContainer>
      <ContainerTitle>
        <Title>
          <p>Rappi4</p>
        </Title>
      </ContainerTitle>
      <Search>
        <img src={searchIcon} alt="Ícone de busca" />
        <input type="text" placeholder="Restaurante" onClick={goToSearchPage} />
      </Search>
      <Filter>
      {categoriesList.map(category => {
          return (
            <article key={category}>
              <Label 
                value={category}
                selected={selectedCategory}
                onClick={() => handleClickCategory(category)}
              >
                {category}
              </Label> 
            </article>
          );
        })}
      </Filter>
      <SectionRestaurant>
      {renderRestaurantsList()}
      </SectionRestaurant>     
      <Footer />
    </FeedContainer>
  );
}

export default FeedPage;
