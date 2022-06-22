import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Progress from "./Progress";
const Heatmap=()=>{
    return(
        <>
           <Progress done="40"/>
          <Link to="/upload/heatmap/select_support_plan"><button type="button" class="btn btn-outline-success" >continue</button></Link>
        </>
    )
}

export default Heatmap;