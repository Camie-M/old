import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Footer from "../Footer";

import Edit from "./../../assets/edit.svg";

import {
  Title,
  ProfileInfo,
  AddressInfo,
  OrderHistory,
  EmptyHistory,
} from "./styles";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A";

function ProfilePage() {
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    getProfile();
    getOrderHistory();
  }, []);

  const token = JSON.parse(localStorage.getItem("rappi4")).token;

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getProfile = async () => {
    try {
      const response = await axios.get(`${baseUrl}/profile`, axiosConfig);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderHistory = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/orders/history`,
        axiosConfig
      );
      setOrderHistory(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  const goToEditProfilePage = () => {
    history.push("/edit-profile");
  };

  const goToEditAddressPage = () => {
    history.push("/edit-address");
  };

  const formattedDateOrder = (created) => {
    let date = new Date(created);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    switch (month) {
      case 0:
        month = "janeiro";
        return `${day} de ${month} de ${year}`;
      case 1:
        month = "fevereiro";
        return `${day} de ${month} de ${year}`;
      case 2:
        month = "março";
        return `${day} de ${month} de ${year}`;
      case 3:
        month = "abril";
        return `${day} de ${month} de ${year}`;
      case 4:
        month = "maio";
        return `${day} de ${month} de ${year}`;
      case 5:
        month = "junho";
        return `${day} de ${month} de ${year}`;
      case 6:
        month = "julho";
        return `${day} de ${month} de ${year}`;
      case 7:
        month = "agosto";
        return `${day} de ${month} de ${year}`;
      case 8:
        month = "setembro";
        return `${day} de ${month} de ${year}`;
      case 9:
        month = "outubro";
        return `${day} de ${month} de ${year}`;
      case 10:
        month = "novembro";
        return `${day} de ${month} de ${year}`;
      case 11:
        month = "dezembro";
        return `${day} de ${month} de ${year}`;
      default:
        month = "";
        return `Data indisponível`;
    }
  };

  return (
    <div>
      <Title>
        <p>Meu perfil</p>
      </Title>
      <hr />

      <ProfileInfo>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.cpf}</p>
        </div>
        <img src={Edit} alt="Editar" onClick={goToEditProfilePage} />
      </ProfileInfo>

      <AddressInfo>
        <div>
          <p id="addressTitle">Endereço cadastrado</p>
          {user.hasAddress === false ? (
            <p>Não há endereço cadastrado</p>
          ) : (
            <p>{user.address}</p>
          )}
        </div>
        <img src={Edit} alt="Editar" onClick={goToEditAddressPage} />
      </AddressInfo>

      <OrderHistory>
        <p>Histórico de pedidos</p> <hr />
        {orderHistory.length === 0 ? (
          <EmptyHistory>
            <p>Você não realizou nenhum pedido</p>
          </EmptyHistory>
        ) : (
          <div>
            {orderHistory.map((order) => {
              return (
                <div key={order.createdAt} className="orderData">
                  <div>
                    <p id="restaurantName">{order.restaurantName}</p>
                    <p id="dateInfo">{formattedDateOrder(order.createdAt)}</p>
                    <p id="totalPrice">
                      SUBTOTAL R$ {order.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </OrderHistory>
      <Footer />
    </div>
  );
}

export default ProfilePage;
