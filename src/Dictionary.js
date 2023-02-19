import React, {useState} from "react";
import axios from "axios";
import './Dictionary.css';


export default function Dictionary() {
    let[keyword, setKeyword] = useState ("");

   function handleResponse(response){
    console.log(response.data);
    }
   
    function search(event) {
    event.preventDefault();
    
   
    let key=`a2ae14484420ao51b3294b9fbftb12ae`;
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
   
    axios.get(apiUrl).then(handleResponse) ;
    }

   function handleKeywordChange(event){
    setKeyword(event.target.value);
   }
   
    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange}/>
        </form>
    </div>
    );
}