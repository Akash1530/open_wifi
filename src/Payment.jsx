import React from 'react';
import "./pay_button.css"
import { useSelector } from 'react-redux/es/exports';
import Progress from "./Progress";
import {useLocation} from 'react-router-dom'
function Payment() {
    const amount = useSelector(state=>state.amount)
    const location = useLocation()
    const { Plan, SPT } = location.state
    return(
       <>
         <Progress done="80"/>
       <div className='Summary'>
       <h2>Plan : {Plan}</h2>
       <h2>Support Plan : {SPT}</h2>
       </div>
       <button className='button'> Pay : {amount}</button>
       </>
        
    );
}
export default Payment;