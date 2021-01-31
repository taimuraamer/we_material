import './App.css';
import React from 'react'
import axios from 'axios';

class App extends React.Component {
  state = {
    questions: []
  }

  totalQuestions() {
    return this.state.questions.length;
  }
  componentDidMount() {
    axios.get(`https://opentdb.com/api.php?amount=10&category=18&type=multiple`)
      .then(res => {
        const questions = res.data.results;
        this.setState({ questions });
      })
  }

  render() {
    return (
      <div>
      <Header total={this.totalQuestions}/>
      <ul>
        { this.state.questions.map(result => <li>{result.question}</li>)}
      </ul>
      </div>
    )
  }
}

class Header extends React.Component {
  
  render() {
    return(
      <div>
        <h1>
          Welcome to the Quiz
        </h1>
        <h3>Total Questions are: {this.props.total}</h3>
      </div>
    )
  }
}

export default App;
