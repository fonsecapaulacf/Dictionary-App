import React from "react";
import './Meaning.css';
import Synonyms from "./Synonyms";
import Example from "./Example";


export default function Meaning(props){
   
    return (
    <div className="Meaning">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <p className="definition"> Definition: {props.meaning.definition}</p>
        <div className="example"> <Example example= {props.meaning.example}/> </div>
        <br/>
        <div className="synonyms"><Synonyms synonyms = {props.meaning.synonyms}/> </div>
    </div>
    )  ;
    }
       

     
