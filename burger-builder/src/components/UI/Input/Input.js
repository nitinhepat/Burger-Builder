import React from 'react';
const Input = (props) => {
    let input;
    console.log(props.elementConfig.type)
    switch(props.elementConfig.type){
        case 'text':
           input = (<input type="text" 
           value={props.value}
            {...props.elementConfig} 
            onChange={props.change} />)
            break;
        case 'email':
            input = (<input type="text" 
            value={props.value} 
            {...props.elementConfig} 
             onChange={props.change} />)
             break;
        case 'select':
            input = (<select value={props.value} {...props.elementConfig} onChange={props.change}>
                <option>Select option</option>
                {props.elementConfig.options.map(option=>{
                   return (<option value={option.value}>{option.displayValue}</option>)
                })}
            </select>)
            break;
        default: 
            input = (<input type="text" value={props.value} onChange={props.change} />)
    }
    return (
        <section>
            <label>{props.elementConfig.placeholder}</label>
            <div>
            {input}
            </div>
            </section>
    )
}

export default Input;