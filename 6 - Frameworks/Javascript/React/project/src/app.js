import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Home from './components/Home'
import About from './components/About'
import Create from './components/Create'
import Nav from './components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = (props) => {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                    <Route path="/create" component={Create} />
                </Switch>
                
            </div>
        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));
