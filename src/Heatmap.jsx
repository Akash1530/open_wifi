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

const Heatmap=()=>{
    const dispatch = useDispatch();
    var No_of_devices = 5;
    const amount = useSelector(state=>state.amount)
    const location = useLocation()
    const { Plan } = location.state

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
           <img src={url} style={{width:"60vw"}}/>
           <br/>
           <Link to="/upload/heatmap/select_support_plan" state={{ Plan: Plan }}><button type="button" class="btn btn-outline-success"  onClick={()=>{dispatch(actionCreators.depositMoney(amount*(No_of_devices-1)))}}>continue</button></Link>
        </>
    )
}

export default Heatmap;