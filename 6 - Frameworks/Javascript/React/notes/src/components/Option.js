import React from 'react'

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
  
export default Option;