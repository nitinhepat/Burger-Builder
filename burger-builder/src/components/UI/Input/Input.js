import React from 'react';
const Input = (props) => {
    let input;
    switch(props.type){
        case 'text':
           input = <input type="text" value={props.value} onChange={props.change} />
        case 'email':
            input = <input type="text" value={props.value} onChange={props.change} />
        case 'select':
            input = (<select value={props.value} onChange={props.change}>
                <option>Select option</option>
                {props.elementConfig.options.map(option)=>{
                    <option value={option.value}>{option.displayValue}</option>
                }}
            </select>)
        default: 
            input = <input type="text" value={props.value} onChange={props.change} />
    }
    return (
        <section>{input}</section>
    )
}

export default Input;