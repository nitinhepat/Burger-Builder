import React,{ Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";
import Aux from "../../hoc/Auxillary/Auxillary";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from './ContactData/ContactData'

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
    purchaseContinue = () =>{
        this.props.history.replace('/checkout/contactData')
    }
    purchaseCancel = () =>{

    }
    render() {
       return ( <Aux>
            <CheckoutSummary
            purchaseContinue={this.purchaseContinue}
            purchaseCancel={this.purchaseCancel}
             ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
            <Route path={this.props.match.path+'/contactData'} render={(props)=>{
                return(
                    <ContactData ingredients={this.state.ingredients}></ContactData>
                )
            }}></Route>
        </Aux>)
    }
}

export default Checkout;