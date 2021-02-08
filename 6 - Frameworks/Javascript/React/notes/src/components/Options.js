import React from 'react';
import Option from './Option'

const Options = (props) => {
  
    return (
      <div>
        {props.options.length == 0 && <p>No Options.</p>}
        <ol>
          {props.options.map((option) => {
            return <Option optionText={option} removeOneOption={props.removeOneOption}/>
          })}
        </ol>
      </div>
    )
  
}

export default Options