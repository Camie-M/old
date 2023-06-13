import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";


import SplashScreen from "./SplashScreen"
import CartPage from "./CartPage/index";
import EditAddressPage from "./EditAddressPage/index";
import EditProfilePage from "./EditProfilePage/index";
import FeedPage from "./FeedPage/index";
import LoginPage from "./LoginPage/index";
import ProfilePage from "./ProfilePage/index";
import RestaurantPage from "./RestaurantPage/index";
import SearchPage from "./SearchPage/index";
import SignUpAddressPage from "./SignUpAddressPage/index";
import SignUpPage from "./SignUpPage/index";
import ProtectedRoute from "./ProtectedRoute"


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashScreen} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <ProtectedRoute exact path="/cart" component={CartPage} />
        <ProtectedRoute exact path="/edit-address" component={EditAddressPage} />
        <ProtectedRoute exact path="/edit-profile" component={EditProfilePage} />
        <ProtectedRoute exact path="/feed" component={FeedPage} />     
        <ProtectedRoute exact path="/profile" component={ProfilePage} />      
        <ProtectedRoute exact path="/restaurant/:restaurantId" component={RestaurantPage} />
        <ProtectedRoute exact path="/search" component={SearchPage} /> 
        <ProtectedRoute exact path="/signup-address" component={SignUpAddressPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
