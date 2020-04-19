import React from 'react';
import classes from './Button.css';
const Button = (props) =>{
    const classNames =  classes.Button = ' ' + props.btnType;
   console.log('Inside Button');
   return (<button onClick={props.btnClicked} className={classNames}>
        {props.children}
    </button>)
}

export default Button;