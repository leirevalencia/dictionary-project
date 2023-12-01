import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let[results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
            </section>
            
        </div>
    );
}