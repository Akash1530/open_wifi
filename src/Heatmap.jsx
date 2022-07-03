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
    var No_of_devices = 5;
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
           <Progress done="40"/>
           
           <div className='heatmap' >
           <h1 >No of Device = {No_of_devices}</h1>
           <img src={url}/>
           </div>
           <br/>
           <Link to="/upload/heatmap/select_support_plan" state={{ Plan: Plan, price:price, device:No_of_devices  }}><button type="button" class="btn btn-outline-success"  onClick={()=>{dispatch(actionCreators.depositMoney(amount*(No_of_devices-1)))}}>continue</button></Link>
        </>
    )
}

export default Heatmap;