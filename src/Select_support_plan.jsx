import React from 'react';
import { Link } from "react-router-dom";
import "./Plans.css"
import Planbox from "./Planbox";
import Payment from "./Payment";
import {useDispatch} from 'react-redux';
import { actionCreators } from './state/index';
import Progress from "./Progress";
import { useLocation } from 'react-router-dom'
function Select_support_plan() {
    const dispatch = useDispatch();
    const location = useLocation()
    const { Plan } = location.state
    return (
        <div>
            <Progress done="60"/>
            <h1>Select support plan</h1>
            <div className="selectPlan">
                <Link className="Remove_txt_deco" to="/upload/heatmap/select_support_plan/payment"> <Planbox Plan="Community" Price="Included" Feature_1="Online Forums" Feature_2="3 Business day's response" /> </Link>
                <Link className="Remove_txt_deco" onClick={()=>{dispatch(actionCreators.depositMoney(500))}} to="/upload/heatmap/select_support_plan/payment" state={{ Plan:Plan, SPT:"Professional" }}><Planbox Plan="Professional" Price="+ $500 / Year" Feature_1="Community" Feature_2="8*5 support" /> </Link>
                <Link className="Remove_txt_deco" onClick={()=>{dispatch(actionCreators.depositMoney(2000))}} to="/upload/heatmap/select_support_plan/payment" state={{ Plan: Plan, SPT:"Enterprise" }}><Planbox Plan="Enterprise" Price="+$2,000 / Year" Feature_1="24*7 support" Feature_2="On-site visits" /> </Link>
            </div>

        </div>
    )

}
export default Select_support_plan;