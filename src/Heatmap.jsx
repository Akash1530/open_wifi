import React,{useEffect,useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Progress from "./Progress";
import {ref,onValue} from "firebase/database"
import {storage,database} from "./firebase";

const Heatmap=()=>{

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
          <Link to="/upload/heatmap/select_support_plan"><button type="button" class="btn btn-outline-success" >continue</button></Link>
        </>
    )
}

export default Heatmap;