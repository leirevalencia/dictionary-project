import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let[results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
}

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "gllRX2ZGoTzszzed2X59f2hW1UaOZyKTbLp1sq0koIkDwjGfGVWOdpvl";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
        let headers =  { Authorization : `Bearer ${pexelsApiKey}` };

        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }


    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return(
        <div className="searche-engine">
            <section>
            <form className="searchbox" onSubmit={search}>
                <input
                onChange={handleKeywordChange}
                type="search"
                className="search"
                placeholder="📖 tell me what you are looking for"
                autoFocus={true}
                id="Search"
                />
                <input
                type="submit"
                className="button"
                value="Search"
                />
            </form>
            <Results results={results}/>
            <Photos photos={photos} />
            </section>
            
        </div>
    );
}