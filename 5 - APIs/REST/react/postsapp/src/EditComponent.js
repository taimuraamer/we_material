import React from 'react';
import { useParams } from 'react-router-dom'

const Edit = (props) => {
    let { id } = useParams();
    return (
        <div>
            <h1>Search module ID: {id}</h1>
        </div>
    )
}

export default Edit;