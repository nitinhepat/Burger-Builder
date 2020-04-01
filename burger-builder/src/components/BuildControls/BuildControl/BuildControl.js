import React from 'react';
import classes from './BuildControl.css'
const BuildControl = (props) =>{
    return (
        <div className={classes.BuildControl}>
            <div>{props.label}</div>
            <button className={classes.Less} onClick={props.removeClicked}>Less</button>
            <button className={classes.More} onClick={props.addClicked}>More</button>
        </div>
    )
}

export default BuildControl;