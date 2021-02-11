import React from 'react'
import ReactDOM from 'react-dom'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
    return (
        <Router>
        <div>
            <Route path="/about" component={About} />
        </div>
        </Router>
    )
}

const appRoot = document.getElementById('app');
ReactDOM.render(<App/>, appRoot)
