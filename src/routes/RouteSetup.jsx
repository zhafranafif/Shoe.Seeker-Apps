import React from "react";
import {
    Route,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import DetailPage from "../pages/DetailPage";
import WebPages from "../pages/WebPages";
import ProductPage from "../pages/ProductPage";
import Cart from "../component/Cart";

const RouteSetup = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<WebPages />}></Route>
              <Route path='/aboutus' element={<AboutUsPage />}></Route>
              <Route path='/product' element={<ProductPage />}></Route>
              <Route path='/product/:product_name' element={<DetailPage />}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default RouteSetup