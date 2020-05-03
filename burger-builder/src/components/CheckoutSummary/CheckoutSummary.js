import React from 'react';
import Burger from '../Layout/Burger/Burger';
import Button from '../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div>
            <Burger ingredients={props.ingredients}></Burger>
            <section>
                <Button clicked={props.purchaseContinue} btnType="Success">Continue</Button>
                <Button clicked={props.purchaseCancel} btnType="Danger">Cancel</Button>
            </section>
        </div>
    )
}

export default CheckoutSummary;