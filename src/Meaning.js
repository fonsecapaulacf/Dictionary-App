import React from "react";
import './Meaning.css';

export default function Meaning(props){
   
   
    return (<div className="Meaning">

        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <p className="definition">{props.meaning.definition}</p>
        <p className="example">Example: {props.meaning.example}</p>
        </div>
)
    
}