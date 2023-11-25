import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");


    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
    }

    function handleKeywordChange(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return(
        <div className="searche-engine">
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
        </div>
    );
}