import React from 'react';
import {useParams} from 'react-router-dom'

const Search = (props) => {
    let { id } = useParams();
    return (
        <div>
            <h1>Search module {id}</h1>
            {id == 3 && <p>Welcome</p>}
            
        </div>
    )
}

export default Search;