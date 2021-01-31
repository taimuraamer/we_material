class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }

  plus() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  minus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  reset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const appRoot = document.getElementById("app");

ReactDOM.render(<Counter />, appRoot);
