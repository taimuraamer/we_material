class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: false,
      };
      this.toggle = this.toggle.bind(this);
  
    }
  
    toggle() {
      this.setState((prevState) => {
        return {
          display: !prevState.display
        };
      });
    }
    
  
    render() {
      return (
        <div>
          <button onClick={this.toggle}>{this.state.display ? 'Hide' : 'Show'}</button>
          {this.state.display && <h1>THis is some text hidden</h1>}
        </div>
      );
    }
  }
  
  const appRoot = document.getElementById("app");
  
  ReactDOM.render(<Toggle />, appRoot);
  