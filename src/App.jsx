import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Upload from "./Upload";
import Select_support_plan from "./Select_support_plan";
import Selectplan from "./Selectplan";
import Payment from  "./Payment";
import Heatmap from "./Heatmap";
const App = () => {
  return(
    <>
    <Routes>
      <Route path = "/" element = {<Selectplan/>}/>
      <Route path = '/upload' element = {<Upload/>} exact />
      <Route path = '/upload/heatmap' element = {<Heatmap/>} exact />
      <Route path = '/upload/heatmap/select_support_plan' element = {<Select_support_plan/>} exact />
      <Route path = '/upload/heatmap/select_support_plan/payment' element = {<Payment/>} exact />
    </Routes>
    {/* <Plans /> */}
    </>
  );
  
};

export default App;