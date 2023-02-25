import React from "react";
import Meaning from './Meaning';
import './Results.css';

export default function Results(props){
    if (props.results){
   return (
   <div className="Results">
    <section>

    <span className="SearchedWord">{props.results.word}   </span>
    <span className="Phonetics">/{props.results.phonetic}/</span>
    
    </section>
<br/>

    <h3>{props.results.meanings.map(function(meaning, index){
    if (index<3){
    return (

        <section className="Meaning" key={index}>
         <Meaning meaning= {meaning}/> </section>
        );
    } else return null;
   })
   }
   </h3>


   </div>
    );
}
    else {
    return null;
} 
}