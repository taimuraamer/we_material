
class NotesApp extends React.Component {
  
    render() {
      this.state = {
      subjects: ["C++", "Java", "Python", "React"],
    }
      const appTitle = "Our Notes App!!!";
      const appSlogan = "The best To-Do App ever!";
      return (
          <div>
              <Header
                title={appTitle} 
                slogan={appSlogan}
              />
              <PickTask length={this.state.subjects.length}/>
              <Tasks subjects={this.state.subjects}/>
              <RemoveAll length={this.state.subjects.length} handler={this.removeHandler}/>
              <Footer />
          </div>
      )
    }
  
    removeHandler() {
      this.setState(() => {
        subjects: []
      })
    }
  }
  class Header extends React.Component {
    render() {
      return (
              <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.slogan}</h3>
              </div>
              )
    }
  }
  
  class PickTask extends React.Component {
    render() {
      return (
        <div>
          <button disabled={this.props.length == 0}>Pick a task</button>
        </div>
      )
    }
  }
  
  class Tasks extends React.Component {
    render() {
      return(
        <div>
          {this.props.subjects.map((subject, index) => {
            <Task sub={subject}/>
          })}
          
        </div>
      )
    }
  }
  
  class Task extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.subject}</p>
        </div>
      )
    }
  }
  
  class RemoveAll extends React.Component {
   
    render() {
      return (
        <div>
  
          <button onClick={this.props.handler} disabled={this.props.length == 0}>Remove All</button>
        </div>
      )
    }
  }
  
  class Footer extends React.Component {
    render() {
      return (
        <div>
          <p>@Copyright</p>
        </div>
      )
    }
  }
  
  const AppRoot = document.getElementById('app')
  
  ReactDOM.render(<NotesApp />, AppRoot)