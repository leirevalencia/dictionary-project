import React from "react";
import "./Photos.css";

export default function Photos(props) {
    console.log(props.photos);
    if (props.photos) {
        return (
            <div className="photos">
                {props.photos.map(function(photo,index) {
                    console.log(photo);
                    return (
                        <div className="img">
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                            <img src={photo.src.tiny} key={index} alt="#" />
                            </a>
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
    
}