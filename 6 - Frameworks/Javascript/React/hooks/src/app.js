import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [state, setState] = useState({count: 0, test: 'testing'});

    function plus() {
        setState((prevState) => {
            return {
                ...prevState, count: prevState.count + 1
            }
        })
    }   
    function minus() {
        setState((prevState) => {
            return {
                ...prevState, count: prevState.count - 1
            }
        })
    }   
    return (
        <div>
            <button onClick={plus}>+</button>
            <p>{state.count}{state.test}</p>
            <button onClick={minus}>-</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
