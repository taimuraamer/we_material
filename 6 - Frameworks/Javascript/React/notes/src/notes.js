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
    }
    addOption(optionText) {
  
      if(this.state.options.indexOf(optionText) > -1) {
          return 'Task already in the list.'
      }
      else if(optionText.length == 0) {
          return 'Task can not be left empty'
      }
      else if(optionText.length <= 3) {
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
          <Options options={this.state.options}/>
          <AddOption addOption={this.addOption}/>
          <Remove optionsLength={this.state.options.length} removeAll={this.removeAll}/>
          {/* <Footer />  */}
        </div>
      );
    }
  }
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.slogan}</p>
        </div>
      );
    }
  }
  class Options extends React.Component {
    render() {
      return (
        <div>
          {this.props.options.length == 0 && <p>No Options</p>}
          {this.props.options.map((option, index) => <Option key={index} index={index} optionText={option}/>)}
        </div>
      );
    }
  }
  class Option extends React.Component {
    render() {
      return <div>{this.props.index+1} - {this.props.optionText}</div>;
    }
  }
  class PickOption extends React.Component {
    render() {
      return <div>
                  <button disabled={this.props.optionsLength == 0} onClick={this.props.pickTask}>Pick a Task</button>
              </div>;
    }
  }
  class Remove extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.removeAll} disabled={this.props.optionsLength == 0}>Remove All</button>
        </div>
      );
    }
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
  class Footer extends React.Component {
    render() {
      return <p>Footer Component</p>;
    }
  }
  const appRoot = document.getElementById("app");
  
  ReactDOM.render(<Notes />, appRoot);
  