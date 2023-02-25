import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props) {
    let[keyword, setKeyword] = useState (props.defaultKeyword);
    let[definition, setDefinition] = useState (null);
    let[loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);


   function handleResponse(response){
    console.log(response.data.meanings);
    setDefinition(response.data);
    }

    function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
      }


    function search() {

    
        let key=`a2ae14484420ao51b3294b9fbftb12ae`;
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
        axios.get(apiUrl).then(handleResponse) ;

  

        let pexelsApiKey = "Lsptdc7IyWf25b4j2s9WUDLfyHXHdV5RE9m2x9XQPyH0PqFeN1uiwi1J";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }



    function handleSubmit(event){
        event.preventDefault();
        search();
    }

   function handleKeywordChange(event){
    setKeyword(event.target.value);
   }


   function load(){
    setLoaded(true);
    search();
   }

   if(loaded){
    return (
    <div className="Dictionary">
        <section>
        <h1>What word do you want to search for?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>  
        </form>
    
        </section>
        <Results results={definition} /> 
        <Photos photos={photos} />
    </div>
    );
} else {
    load();
    return "Loading";
}
}