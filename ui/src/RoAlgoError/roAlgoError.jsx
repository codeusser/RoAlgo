import React from "react";
import './roAlgoError.scss';
import { Link } from "react-router-dom";

export default function RoAlgoError(props) {
    console.log(props.errorMessage);
    
    return (
        <>
            <div className="Hof--error">        
                <img src="error-icon.png"></img>
                <div className="Hof--errorr">
                    <p>{props.errorMessage}</p>
                    {props.errorMessage[0] == 'P' && <Link to={"/new_person"}>Creaz-o</Link>}
                </div>
            </div>
        </>
    )
}