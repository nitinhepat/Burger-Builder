
import React from 'react';
import ButtonComp from '../UI/Button/Button';
const OrderSummary = (props) =>{
    const ingredients = Object.keys(props.ingredients).map((ingKey=>{
    return <li><strong>{ingKey}</strong>: {props.ingredients[ingKey]}</li>
    }))
    return (
        <section>
             <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <ButtonComp>Continue</ButtonComp>
            <ButtonComp>Cancel</ButtonComp>
        </section>
    )
}

export default OrderSummary;