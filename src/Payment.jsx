import React from 'react';
import "./pay_button.css"
import { useSelector } from 'react-redux/es/exports';
import Progress from "./Progress";

function Plans() {
    const amount = useSelector(state=>state.amount)
    return(
       <>
         <Progress done="80"/>
       <button className='button'> Pay : {amount}</button>
       </>
        
    );
}
export default Plans;