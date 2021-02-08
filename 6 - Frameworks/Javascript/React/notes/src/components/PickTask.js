import React from 'react';
import Button from '@material-ui/core/Button'

const PickTask = (props) => {
            return (
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={props.pickTask}
                    disabled={props.length == 0}
                >Pick A Task
                </Button>
            </div>)
}
export default PickTask;