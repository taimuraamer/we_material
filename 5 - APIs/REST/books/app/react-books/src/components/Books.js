import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Books() {
    const [state, setState] = useState([]);
    useEffect(() => {
        // const article = { title: 'React POST Request Example' };
        axios.get('http://localhost:5000/books')
            .then(response => {
                setState(prev => {
                    return response.data
                })
                // console.log(response.data)
            });

    }, [state])
    return (
        <ol>
            {state.map((book) => {
                return (
                    <div>
                        <li>
                            {book.title}
                        </li>
                    </div>
                )
            })}
        </ol>
    );
}