import React from 'react'
import TextField from '@material-ui/core/TextField';
export default class AddOption extends React.Component {
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
            <TextField  type="text" name="option" label="Enter an Option"/>
            <button>Add Option</button>
          </form>

        </div>
      )
    }
  }