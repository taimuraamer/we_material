import React from 'react'
import ReactDOM from 'react-dom'
// import Header from './components/header'

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["C++", "Java", "React", "Javascript", "Python"],
    }
    this.pickTask = this.pickTask.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.addOptionToState = this.addOptionToState.bind(this)
    this.removeOneOption = this.removeOneOption.bind(this)
  }
  render() {
    return(
      <div>
        <Header title={"TO DO APP"} slogan={"This is a slogan"}/>
        <PickTask pickTask={this.pickTask} length={this.state.options.length}/>
        <Options options={this.state.options} removeOneOption={this.removeOneOption}/>
        <AddOption options={this.state.options} add={this.addOptionToState}/>
        <RemoveAll removeAll={this.removeAll} length={this.state.options.length}/>
      </div>
    ) 
  }
  pickTask()
  {
    const r = Math.floor(Math.random() * this.state.options.length)
    window.alert(this.state.options[r])
  }
  removeAll() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // })

   this.setState(() => ({options: []}))
  }
  addOptionToState(optionText) {
    if(optionText === "")
    {
      return 'Empty option is not allowed.'
    }
    else if (optionText.trim().length < 3) {
      return 'The option text is too small.'
    }
    else if(this.state.options.indexOf(optionText) > -1)
    {
      return 'Option is already in the list.'
    }
    else {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(optionText)
      }
    })
  }
  }
  removeOneOption(optionText) {
    this.setState((prevState) => ({options: prevState.options.filter((option) => option != optionText)}))

  }
  componentDidMount() {
    const txt = localStorage.getItem("options")
    const json = JSON.parse(txt);
    this.setState(() => {
      return {
        options: json
      }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length)
    {
      const str = JSON.stringify(this.state.options)
      localStorage.setItem("options", str)
    }
    
  }
  componentWillUnmount() {

  }

}

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <h3>{props.slogan}</h3>
      </div>
    )
  
}


const Options = (props) => {
  
    return (
      <div>
        {props.options.length == 0 && <p>No Options.</p>}
        <ol>
          {props.options.map((option) => {
            return <Option optionText={option} removeOneOption={props.removeOneOption}/>
          })}
        </ol>
      </div>
    )
  
}
class Option extends React.Component {
  constructor(props) {
    super(props)
    this.removeOption = this.removeOption.bind(this)
  }
  removeOption(e) {
    this.props.removeOneOption(this.props.optionText)
  }
  render() {
    return (
      <div>
        <li>
          {this.props.optionText}
          <button onClick={this.removeOption}>X</button>
        </li>
      </div>
    )
  }
}
const RemoveAll = (props) => {
  
    return (
      <div>
        <button onClick={props.removeAll} disabled={props.length == 0}>Remove All Options</button>
      </div>
    )
  
}
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.addOption = this.addOption.bind(this)
  }
  addOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value;
    const error = this.props.add(option);
    this.setState(()=> {
      return {
        error: error
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
class PickTask extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.pickTask} disabled={this.props.length == 0}>Pick A Task</button>
      </div>
    )
  }
}


const appRoot = document.getElementById('app');
ReactDOM.render(<Notes/>, appRoot)
