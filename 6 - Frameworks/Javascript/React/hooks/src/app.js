import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import './styles/styles.css'
import { CssBaseline} from "@material-ui/core"

const App = () => {

    const [state, setState] = useState(0);
    return (
        <div>
            <CssBaseline />
            <Header />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
