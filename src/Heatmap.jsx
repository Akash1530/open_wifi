import React,{useEffect,useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Progress from "./Progress";
import {ref,onValue} from "firebase/database"
import {storage,database} from "./firebase";
import {useDispatch} from 'react-redux';
import { actionCreators } from './state/index';
import { useSelector } from 'react-redux/es/exports';
import { useLocation } from 'react-router-dom'
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import "./heatmap.css"
const Heatmap=()=>{
    const dispatch = useDispatch();
    var No_of_devices1 = 5;
    var No_of_devices2 = 4;
    const amount = useSelector(state=>state.amount)
    const location = useLocation()
    const { Plan,price } = location.state

   const [url,setUrl]=useState(); 
useEffect(()=>{
    const usersRef=ref(database,'/users');
    onValue(usersRef,(snapshot)=>{
        const data=snapshot.val();
        setUrl(data.imageUrls);
       
       
    });

},[]);

    return(
        <>
            <Progress done="40" />
            <div className="heatmap2_div_link">
                <div className="card_heatmap2">
                    <Link to="/upload/heatmap/select_support_plan" state={{ Plan: Plan, price: price, device: No_of_devices1 }} className="Heatmap2_link" onClick={() => { dispatch(actionCreators.depositMoney(amount * (No_of_devices1 - 1))) }}>
                        <img src={url} alt="Heatmap" />
                        <h1>Team A Algo</h1>
                        <p className="price_heatmap2">Price : ${amount * (No_of_devices1)}</p>
                        <p>Signal Strength : Strong</p>

                    </Link>
                </div>
                <div className="card_heatmap2">
                    <Link to="/upload/heatmap/select_support_plan" state={{ Plan: Plan, price: price, device: No_of_devices2 }} className="Heatmap2_link" onClick={() => { dispatch(actionCreators.depositMoney(amount * (No_of_devices2 - 1))) }}>

                        <img src={url} alt="Heatmap" />
                        <h1>Team B Algo</h1>
                        <p className="price_heatmap2">Price : ${amount * (No_of_devices2)}</p>
                        <p>Signal Strength : Poor</p>

                    </Link>
                </div>
            </div>
            </>
    )
}

export default Heatmap;