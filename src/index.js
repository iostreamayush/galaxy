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
import Navbar from './componet/frontend/navbar/navbar';
import Homepage from './componet/frontend/homepage/Homepage';
import Subproduct from './componet/frontend/subproduct/subproduct';
import Contact from './componet/frontend/contact us/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/adminlogin' element={<Login/>}></Route>
      <Route exact path='/admindash' element={<Admindashbord/>}></Route>
      <Route exact path='/category' element={<Category/>}></Route>
      <Route exact path='/subcategory' element={<Subcategory/>}></Route>
      <Route exact path='/product' element={<Product/>}></Route>
      <Route exact path='/' element={<Homepage/>}></Route>
      <Route exact path='/nav' element={<Navbar/>}></Route>
      <Route exact path='/subproduct/:id' element={<Subproduct/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
