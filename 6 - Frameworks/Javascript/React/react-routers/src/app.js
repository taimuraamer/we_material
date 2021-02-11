import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Search from './components/Search'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = (props) => (
    <div>
        <Header />
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </Router>
    </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
