
import React from 'react';
import Button from '../UI/Button/Button';
import classes from './OrderSummary.css'
const OrderSummary = (props) =>{
    const ingredients = Object.keys(props.ingredients).map((ingKey=>{
    return <li key={ingKey}><strong>{ingKey}</strong>: {props.ingredients[ingKey]}</li>
    }))
    return (
        <section className={classes.OrderSummary}>
             <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <section className={classes.BtnSection}>
                <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
                <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            </section>
        </section>
    )
}

export default OrderSummary;