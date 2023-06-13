import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  RestaurantContainer,
  RestaurantDetailPage,
  ProductContainer,
  RestaurantLogo,
  ProductImage,
  AddToCartButton,
  Select,
  LoadingContainer,
  ProductCard,
  ProductDescriptionContainer,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCart,
  AddToCartContainer,
  ProductQuantityContainer,
  ProductQuantity,
  RestaurantTitle,
  RestaurantCategory,
  RestaurantDeliveryTime,
  RestaurantDeliveryPrice,
  RestaurantAdress,
  RemoveFromCart,
  RemoveFromCartContainer,
  ProductQuantityAdded,
  ProductQuantityContainerAdded,
  ProductCategory,
  ProductCategoryBar,
  Title,
} from "./styles";
import { GoBack } from "./../../styles/forms";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import ArrowBack from "./../../assets/arrow_back.svg";

import { fetchRestaurantDetail } from "../../functions/axios";
import ReactLoading from "react-loading";

import { useParams } from "react-router-dom";

import CartContext from "../../context/CartContext";

function RestaurantPage() {
  const restaurantId = useParams();
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };
  const [showModal, setShowModal] = useState(false);
  let [quantity, setQuantity] = useState(0);

  const [loading, setLoading] = useState(true);

  const cartContext = useContext(CartContext);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleProductQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const removeFromCart = () => {
    setQuantity((quantity -= 1));
  };

  const addProductToCart = (product, restaurantId) => {
    cartContext.dispatch({
      type: "ADD_TO_CART",
      product: product,
      restaurantId: restaurantId.restaurantId,
    });
    alert("Produto adicionado ao carrinho!");
  };

  const token = JSON.parse(localStorage.getItem("rappi4")).token;
  const [restaurantDetail, setRestaurantDetail] = useState();

  useEffect(() => {
    fetchDetails();
  }, []);

  const axiosConfig = token;

  const fetchDetails = async () => {
    const response = await fetchRestaurantDetail(
      restaurantId.restaurantId,
      axiosConfig
    );
    setRestaurantDetail(response);
  };


  // Lógica para mostrar os produtos conforme suas categorias

  const restaurantCategory =
    restaurantDetail &&
    restaurantDetail.restaurant.products.map((product) => {
      return product.category;
    });

  let productList = restaurantDetail && restaurantDetail.restaurant.products;

  const onlySetRestaurantCategory = new Set(restaurantCategory);
  const noDuplicatesRestaurantCategory = [...onlySetRestaurantCategory];

  let filteredProductsArray = [];

  const filterProduct = (item) => {
    const products = productList.filter((product) => {
      if (product.category === item) {
        return product;
      }
    });
    const categoryProducts = {
      category: item,
      products: products,
      quantity: 0,
    };

    filteredProductsArray.push(categoryProducts);
    return filteredProductsArray;
  };

  noDuplicatesRestaurantCategory.forEach(filterProduct);

  // Ternário que define qual botão vai aparecer conforme o número de quantidades em um carrinho

  const addRemoveProducts =
    quantity >= 1 ? (
      <RemoveFromCartContainer>
        <RemoveFromCart onClick={removeFromCart}>Remover</RemoveFromCart>
      </RemoveFromCartContainer>
    ) : (
      <AddToCartContainer>
        <AddToCart onClick={handleShowModal}>Adicionar</AddToCart>
      </AddToCartContainer>
    );

  // Ternário que mostra ou não o número de quantidade do produto

  const productQuantity =
    quantity >= 1 ? (
      <ProductQuantityContainerAdded>
        <ProductQuantityAdded>{quantity}</ProductQuantityAdded>
      </ProductQuantityContainerAdded>
    ) : (
      <div></div>
    );

  const render = restaurantDetail ? (
    <RestaurantDetailPage>
      <GoBack>
        <img src={ArrowBack} alt={"Voltar"} onClick={goToFeedPage} />
        <span>Restaurante</span>
      </GoBack>
      <RestaurantContainer>
        <RestaurantLogo src={restaurantDetail.restaurant.logoUrl} />
        <RestaurantTitle>{restaurantDetail.restaurant.name}</RestaurantTitle>
        <RestaurantCategory>
          {restaurantDetail.restaurant.category}
        </RestaurantCategory>
        <div>
          <RestaurantDeliveryTime>
            {restaurantDetail.restaurant.deliveryTime} min
          </RestaurantDeliveryTime>
          <RestaurantDeliveryPrice>
            Frete R${restaurantDetail.restaurant.shipping.toFixed(2)}
          </RestaurantDeliveryPrice>
        </div>
        <RestaurantAdress>
          {restaurantDetail.restaurant.address}
        </RestaurantAdress>
      </RestaurantContainer>
      <div>
        {restaurantDetail &&
          filteredProductsArray.map((menu) => {
            return (
              <div>
                <ProductCategory>{menu.category}</ProductCategory>
                <ProductCategoryBar />
                {menu.products.map((product) => {
                  return (
                    <ProductContainer>
                      <ProductCard>
                        <ProductImage src={product.photoUrl} />
                        <ProductDescriptionContainer>
                          <ProductTitle>{product.name}</ProductTitle>
                          <ProductDescription>
                            {product.description}
                            <ProductPrice>
                              R$ {product.price.toFixed(2)}
                            </ProductPrice>
                          </ProductDescription>
                        </ProductDescriptionContainer>
                        <div>
                          <AddToCartContainer>
                            <AddToCart
                              onClick={() =>
                                addProductToCart(product, restaurantId)
                              }
                            >
                              Adicionar
                            </AddToCart>
                          </AddToCartContainer>
                        </div>
                        <div>{productQuantity}</div>
                      </ProductCard>
                    </ProductContainer>
                  );
                })}
              </div>
            );
          })}
      </div>
      <Dialog
        open={showModal}
        onClose={handleCloseModal}
        fullWidth={true}
        maxWidth={"sd"}
      >
        <DialogTitle>
          <p>Adicione uma quantidade</p>
          <Select onChange={handleProductQuantity}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </Select>
          <Button color="primary" onClick={handleCloseModal}>
            Adicionar ao carrinho
          </Button>
        </DialogTitle>
      </Dialog>
    </RestaurantDetailPage>
  ) : (
    <LoadingContainer>
      <ReactLoading type="spin" color="#ff3b30" />{" "}
    </LoadingContainer>
  );
  return (
    <div>
      {render}
      <div></div>
    </div>
  );
}

export default RestaurantPage;
