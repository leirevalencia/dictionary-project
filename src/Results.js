import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
    console.log(props.results);

    if (props.results) {
        return(
            <div className="Results">
                <h3>{props.results.word}</h3>
                {props.results.map(function(meaning, index) {
                    return (
                    <div key={index}>
                       <Meaning meaning={meaning} /> 
                    </div>
                    );
                        ;
                })}
            </div>
        );
    } else {
        return null;
    }
    
}