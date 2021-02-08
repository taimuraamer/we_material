import React from 'react'
import Button from '@material-ui/core/Button';

const RemoveAll = (props) => {
  
    return (
      <div>
        <Button 
              onClick={props.removeAll} disabled={props.length == 0}
              variant="contained"
              color="primary"
          >Remove All Options
        </Button>
      </div>
    )
  
}

export default RemoveAll;