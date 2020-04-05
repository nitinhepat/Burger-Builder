import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const  BuildControls = (props) => {
   
    return <div className={classes.BuildControls}>
            {controls.map(control=>{
                return <BuildControl key={control.label} label={control.label}
                        addClicked={() => props.addClicked(control.type)}
                        removeClicked={()=>props.removeClicked(control.type)}></BuildControl>
            })}
            <button className={classes.OrderButton}> Order Now</button>
    </div>

    
}

export default BuildControls;