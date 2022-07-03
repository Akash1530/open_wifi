import React from "react";
import './Payment_done.css';
import Progress from "./Progress";
function Payment_done() {
    return (
        <>
            <Progress done="100" />
            <div className="card">
                 <i className="checkmark">✓</i>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> we'll be in touch shortly!</p>
            </div>
        </>
    );
}
export default Payment_done;