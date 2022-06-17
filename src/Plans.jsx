import React from 'react';
import {Link }from "react-router-dom";
import "./Plans.css"
function Plans() {
    return(
       <>
       <Link to="/upload"> Plan A </Link>
       <Link to="/upload"> Plan B </Link>
       </>
        
    );
}
export default Plans;