import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [state, setCount] = useState({color: 'blue', count: 0});
    
    const plus = () => {
        setCount((prevCount) => {
            return {
                ...prevCount, count: prevCount.count + 1
            }
        })
    }
    
    
    return (
        <div>
            <button onClick={plus}>+</button>
            <h1>{count}</h1>
            {/* <button onClick={minus}>-</button> */}
        </div>

    )

    
    
}



ReactDOM.render(<App />, document.getElementById('app'));
