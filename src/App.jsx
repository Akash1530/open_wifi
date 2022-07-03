import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Upload from "./Upload";
import Select_support_plan from "./Select_support_plan";
import Selectplan from "./Selectplan";
import Payment from  "./Payment";

import { useSelector } from 'react-redux/es/exports';
import Heatmap from "./Heatmap";
import Profile from './Profile';
import Payment_done from './Payment_done'
import "./App.css";
const App = () => {
  const amount = useSelector(state => state.amount)
  return(
    <>
     <div className="header">
        <a href="/" className="logo"><img src="https://www.truminds.com/wp-content/uploads/2021/02/Logo.png" alt="" height={30} width={2} /></a>
        <div className="header-right">
          <a className="active" href="/profile" >Profile</a>
        </div>
      </div>
    <Routes>
      <Route path = "/" element = {<Selectplan/>}/>
      <Route path = "/profile" element={<Profile/>} exact/>
      <Route path = '/upload' element = {<Upload/>} exact />
      <Route path = '/upload/heatmap' element = {<Heatmap/>} exact />
      <Route path = '/upload/heatmap/select_support_plan' element = {<Select_support_plan/>} exact />
      <Route path = '/upload/heatmap/select_support_plan/payment' element = {<Payment/>} exact />
      <Route path='/upload/heatmap/select_support_plan/payment/payment_done' element={<Payment_done />} exact />
    </Routes>
    {/* <Plans /> */}
    </>
  );
  
};

export default App;