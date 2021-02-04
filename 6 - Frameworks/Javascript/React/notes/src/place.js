


class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["C++", "Java", "React", "Javascript", "Python"],
      title: "To-Do App in React",
      slogan: "Give it up for the mentis lords"
    }
    this.pickTask = this.pickTask.bind(this)
    this.removeAll = this.removeAll.bind(this)
    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
  }
  render() {
    return(
      <div>
        <Header title={this.state.title} slogan={this.state.slogan}/>
        <PickTask pickTask={this.pickTask} length={this.state.options.length}/>
        <Options options={this.state.options} removeOption={this.removeOption}/>
        <AddOption addOption={this.addOption}/>
        <RemoveAll removeAll={this.removeAll} length={this.state.options.length}/>
      </div>
    ) 
  }
  componentDidMount() {
    const json = JSON.parse(localStorage.getItem("options"))
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
  pickTask()
  {
    const r = Math.floor(Math.random() * this.state.options.length)
    window.alert(this.state.options[r])
  }
  removeAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  removeOption(optionText) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => option != optionText)
      }
    })
  }
  addOption(optionText) {
    
    if(optionText === "")
      return 'Empty string is not allowed'
    else if(optionText.length <=3)
      return 'To Do item must be greater than 3 characters'
    else if(this.state.options.indexOf(optionText) > -1)
      return 'Item already in the list'
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(optionText)
      }
    })
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

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.options.map((option, key) => <Option option={option} key={key} removeOption={this.props.removeOption}/>)}
        </ol>
        {this.props.options.length == 0 && <p>No Options</p>}
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
        <li>
          {this.props.option}
          &nbsp;<button onClick={(e) => {
            this.props.removeOption(this.props.option)
          }}>X</button>
        </li>
      </div>
    )
  }
}
class RemoveAll extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeAll} disabled={this.props.length == 0}>Remove All Options</button>
      </div>
    )
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: undefined
    }
    this.addOption = this.addOption.bind(this);
  }
  addOption(e) {
    
    e.preventDefault();
    const option = e.target.elements.option.value;
    const error = this.props.addOption(option)
    this.setState(() => {
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