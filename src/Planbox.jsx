import React from 'react';
import { Link } from "react-router-dom";
import "./Plans.css"
function Planbox(props) {
    return (
        <div>

            <div className="columns">
                <ul className="price">
                    <li className="header">{props.Plan}</li>
                    <li className="grey">{props.Price}</li>
                    <li>{props.Feature_1}</li>
                    <li>{props.Feature_2}</li>
                </ul>
            </div>

        </div>
    );
};
export default Planbox;