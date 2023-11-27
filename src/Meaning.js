import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meainig.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                        {definition.definition}
                        <br />
                        {definition.example}
                        </p>
                    </div>
                );
            })}

        </div>
    );
}