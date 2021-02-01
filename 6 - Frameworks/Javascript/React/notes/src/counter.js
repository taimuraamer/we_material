class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }

  plus() {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    })
  }
  minus() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  reset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
  
    return(
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minu</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    ) 
  }
}

const appRoot = document.getElementById('app')

ReactDOM.render(<Counter />, appRoot)