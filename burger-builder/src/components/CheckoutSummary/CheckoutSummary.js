import React from 'react';
import Burger from '../Layout/Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <Burger ingredients={props.ingredients}></Burger>
            <section className={classes.BtnSection}>
                <Button clicked={props.purchaseContinue} btnType="Success">Continue</Button>
                <Button clicked={props.purchaseCancel} btnType="Danger">Cancel</Button>
            </section>
        </div>
    )
}

export default CheckoutSummary;