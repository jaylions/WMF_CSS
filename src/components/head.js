import React from "react";
import './head.css'
function Headword (props){
    return(
        <div className="head">
            <h1>{props.title}</h1>
            <br/>
            <h2>WUSD price: {props.price}$</h2>
            <h2>Collateral ratio :{props.ratio} (goal:{props.goal})</h2>
        </div>
    );
}
export default Headword;