import React from "react";
import './Square.css'
function Square(props){
    return(
        <div>
        <div className="square">
            <h1 className="title" >{props.title}</h1>
            <br/>
            <h2 className="amount">{props.amount} :</h2>
            <br/>
            <br/>
            <h2 className="min">{props.min} :</h2>
        </div>
        <div className="button">
        <a href="#" class="button">{props.button}</a>
        </div>
        </div>
    );
}

export default Square;