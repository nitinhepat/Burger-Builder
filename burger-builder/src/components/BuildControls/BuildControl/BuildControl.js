import React from 'react';
import classes from './BuildControl.css'
const BuildControl = (props) =>{
    const clicked = () =>{
    console.log('Clicked')  
        return props.addClicked();
    } 
    return (
        <div className={classes.BuildControl}>
            <div style={{
                width: "80px"
            }}>{props.label}</div>
            <button className={classes.Less} disabled={props.disabled} onClick={props.removeClicked}>Less</button>
            <button className={classes.More} onClick={props.addClicked}>More</button>
        </div>
    )
}

export default BuildControl;