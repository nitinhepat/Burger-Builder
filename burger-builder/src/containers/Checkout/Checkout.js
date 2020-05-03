import React,{ Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";
import Aux from "../../hoc/Auxillary/Auxillary";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state={
        ingredients: null,
        totalPrice: 0
    }
    componentWillMount(){
        const query = new URLSearchParams( this.props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }
    render() {
       return ( <Aux>
            <CheckoutSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
        </Aux>)
    }
}

export default Checkout;