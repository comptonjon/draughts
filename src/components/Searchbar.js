import { useState } from 'react';
import './Searchbar.css';

const Searchbar = ({placeholder="Enter Query", handleSubmit}) => {
    const [query, setQuery] = useState("");
    const handleChange = evt => {
        setQuery(query => evt.target.value);
    }
    return (
        <div className="Searchbar">
            <div className="Searchbar-group">
                <input type="text"
                       placeholder={placeholder}
                       value={query}
                       name={query}
                       id={query}
                       onChange={handleChange}
                />
                <button onClick={() => handleSubmit(query)}>Submit</button>
            </div>
        </div>
    )
}

export default Searchbar;