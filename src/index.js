import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Admindashbord from './componet/Adminpanel/Dashbord/admindashbord';
import Category from './componet/Adminpanel/category/category';
import Product from './componet/Adminpanel/product/Product';
import Login from './componet/Adminpanel/adminlogin/adminlogin';
import Subcategory from './componet/Adminpanel/subacategory/Subcategory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}></Route>
      <Route exact path='/admindash' element={<Admindashbord/>}></Route>
      <Route exact path='/category' element={<Category/>}></Route>
      <Route exact path='/subcategory' element={<Subcategory/>}></Route>
      <Route exact path='/product' element={<Product/>}></Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
