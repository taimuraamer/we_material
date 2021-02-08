import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import PickTask from './PickTask'
import Options from './Options'
import RemoveAll from './RemoveAll'

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
        <Header title={"!!!!TO DO APP!!"} slogan={"This is a slogan"}/>
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

export default Notes;