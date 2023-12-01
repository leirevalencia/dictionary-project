import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Dictionary.css";

export default function Result(props) {
    console.log(props.results);

    if (props.results) {
        return(
            <div className="Results">
                <section>
                <h3>{props.results.word}</h3>
                {props.results.phonetics.map(function(phonetic, index){
                    return(
                        <div key={index} className="phonetic">
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                })}
                </section>
                
                {props.results.meanings.map(function(meaning, index) {
                    return (
                    <section key={index} className="meaning">
                       <Meaning meaning={meaning} /> 
                    </section>
                    );
                        ;
                })}
            </div>
        );
    } else {
        return null;
    }
    
}