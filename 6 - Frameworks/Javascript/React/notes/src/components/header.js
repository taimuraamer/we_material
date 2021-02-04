import React from 'react';

export default Header = (props) => {
    return (
        <div>
          <h1>{props.title}</h1>
          <h3>{props.slogan}</h3>
        </div>
      )
    
  }