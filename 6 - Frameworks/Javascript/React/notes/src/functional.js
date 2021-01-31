const data = {
    title: "React To-Do App",
    slogan: "Lets never forget a thing again!",
  };
  class Notes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: ["Java", "C++", "Python", "React"],
      };
      this.addOption = this.addOption.bind(this);
      this.removeAll = this.removeAll.bind(this);
      this.pickTask = this.pickTask.bind(this);
      this.deleteOption = this.deleteOption.bind(this);
  
    }
    addOption(optionText) {
  
      if(this.state.options.indexOf(optionText) > -1) {
          return 'Task already in the list.'
      }
      else if(optionText.length == 0) {
          return 'Task can not be left empty'
      }
      else if(optionText.trim().length <= 3) {
          return 'Task length should be greater than 3'
      }
      this.setState((prevState) => {
          return {
              options: prevState.options.concat(optionText)
          }
          })
      }
    removeAll() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    deleteOption(option) {
      this.setState((prevState) => {
          return {
              options: prevState.options.filter((opt) => opt != option)
          }
      })
    }
    pickTask() {
      const r = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[r];
      console.log(option)
  }
    render() {
      return (
        <div>
          <Header title={data.title} slogan={data.slogan} />
          <PickOption pickTask={this.pickTask} optionsLength={this.state.options.length} />
          <Options options={this.state.options} deleteOption={this.deleteOption}/>
          <AddOption addOption={this.addOption}/>
          <Remove optionsLength={this.state.options.length} removeAll={this.removeAll}/>
          <Footer /> 
        </div>
      );
    }
  
    componentDidMount() {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json);
  
        if(options) {
            this.setState(() => ({options}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
  }
  
  const Header = (props) => {
      return (
          <div>
            <h1>{props.title}</h1>
            <p>{props.slogan}</p>
          </div>
        );
  }
  
  
  const Options = (props) => {
      return (
        <div>
          {props.options.length == 0 && <p>No Options</p>}
          {props.options.map((option, index) => 
              <Option 
                  key={index}
                  index={index}
                  optionText={option}
                  deleteOption={props.deleteOption}
                  />)}
        </div>
      );
    }
  
  const Option = (props) => {
    
      return <div>
                  {props.index+1} - {props.optionText}
                  <button onClick={
                      (e) => {
                          props.deleteOption(props.optionText)
                      }
                  }>Remove</button>
              </div>;
    
  }
  
  const PickOption = (props) => {
      return <div>
                  <button disabled={props.optionsLength == 0} onClick={props.pickTask}>Pick a Task</button>
              </div>;
  }
  
  const Remove = (props) => {
      return (
        <div>
          <button onClick={props.removeAll} disabled={props.optionsLength == 0}>Remove All</button>
        </div>
      );
    }
  
  class AddOption extends React.Component {
      constructor(props) {
          super(props);
          this.addOption = this.addOption.bind(this);
          this.state = {
              error: undefined
          }
      }
    addOption(e) {
      e.preventDefault();
      const optionText = e.target.elements.option.value;
      const error = this.props.addOption(optionText)
      if(!error) {
          e.target.elements.option.value = '';
      }
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
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
  
        </div>
      );
    }
  }
  const Footer = (props) => {
      return <p>Footer Component</p>;
    }
  
  const appRoot = document.getElementById("app");
  
  ReactDOM.render(<Notes />, appRoot);
  