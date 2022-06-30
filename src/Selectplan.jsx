import React from 'react';
import { Link } from "react-router-dom";
import "./Plans.css"
import Planbox from "./Planbox";
import {useDispatch} from 'react-redux';
import { actionCreators } from './state/index';
import Progress from "./Progress";
function Selectplan() {
    const dispatch = useDispatch();
    return (
        <div>
            <Progress done="0"/>
            <h1>Select a Plan</h1>
            <div className="selectPlan">
                <Link className="Remove_txt_deco" to="/upload" state={{ Plan: "Pro Wireless" }} onClick={()=>{dispatch(actionCreators.depositMoney(1000))}}> <Planbox Plan="Pro Wireless" Price="$1,000 / Year" Feature_1 = "Latest Radio Technology" Feature_2 = "Advance Features"/> </Link>
                <Link className="Remove_txt_deco" to="/upload" state={{ Plan: "HD Wireless" }} onClick={()=>{dispatch(actionCreators.depositMoney(1700))}}><Planbox Plan="HD Wireless" Price="$1,700 / Year"Feature_1 = "Everything in Enterprise" Feature_2 = "Ultra High Density"/> </Link>
            </div>

        </div>
    );
};
export default Selectplan;