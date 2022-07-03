import React from 'react';
import "./pay_button.css"
import { useSelector } from 'react-redux/es/exports';
import Progress from "./Progress";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

function Plans() {
  const amount = useSelector(state => state.amount)
  const location = useLocation()
  const { Plan, SPT, device, price, SPT_price } = location.state
  var total = device * price
  return (
    <>
      <Progress done="80" />
      <div className='card-summary'>
        <div className='summary'>
          <div className="component">
            <div className="component-info">
              <div className="order-summary">
                <h2 className='order-summary-h2'>Order Summary</h2>
                <h3>Service Plan : {Plan}</h3>
                <h3>Support Plan : {SPT}</h3>
              </div>
              <div className="annual-plan">
                <div className="plan-image">
                  <img src="https://seeklogo.com/images/W/wireless-icon-logo-DD6F730CD9-seeklogo.com.png" alt="Music icon" />
                </div>
                <div className="plan-price">
                  <h4>Annual Plan</h4>
                  <p>Device cost : {device} * {price} = ${total}</p>
                  <p >Support Plan Cost :   ${SPT_price}</p>
                  <p className='plan-price-p2'>Total : ${amount}</p>
                </div>
              </div>
              <Link to="/upload/heatmap/select_support_plan/payment/payment_done" > <button type="button" className='btn-payment' >Proceed to Payment : ${amount}</button> </Link>
              <a href="/" className="btn-cancel">Cancel Order</a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
export default Plans;