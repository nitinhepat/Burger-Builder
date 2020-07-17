import React, { Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Layout/Burger/Burger";
import classes from './BurgerBuilder.css'
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from '../../axio-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index.actions'
import {connect} from 'react-redux';
class BurgerBuilder extends Component {
    // state = 
    constructor() {
        super();
        this.state = {
            ingredients: null,
            show: false,
            ingredientsErr: false
        }
    }

    orderDetailsHandler = () => {
        this.setState((prevState) => {
            return { show: !prevState.show }
        })
    }
    // constructor(){
    //     super();
    // }
    addIngredient = (type) => {
        this.props.addIngredient(type)
    }
    removeIngredient = (type) => {
        this.props.removeIngredient(type)
    }
    purchaseContinue = () => {
        const queryParams = [];
        for (let i in this.props.ings) {
            let queryString = `${encodeURIComponent(i)}=${this.props.ings[i]}`;
            queryParams.push(queryString);
        }
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryParams.join('&')
        })
    }
    purchaseCancel = () => {
        this.setState({
            show: false
        })
    }

    getIngredients() {

        axios.get('ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                console.error("In error")
                this.setState({ ingredientsErr: true });
            });
    }
    componentDidMount() {
        console.log("In component did mount");
        this.props.fetchIngredients();
    }
    render() {
        console.log('In render');
        const disablecontrols = { ...this.props.ings };
        for (let key in disablecontrols) {
            disablecontrols[key] = disablecontrols[key] <= 0
        }
        let burger = this.props.ingsErr
            ? <h3>Ingredients can't be loaded!</h3>
            : <Spinner />;
        if (this.props.ings) {
            const purchaseable = Object.keys(this.props.ings)
                .reduce((acc, ele) => {
                    return acc = acc + this.props.ings[ele]
                }, 0)

            burger = (<Aux>
                <Modal show={this.state.show} clicked={this.purchaseCancel}>
                    <OrderSummary
                        ingredients={this.props.ings}
                        purchaseContinue={this.purchaseContinue}
                        purchaseCancel={this.purchaseCancel}

                    />
                </Modal>
                <Burger ingredients={this.props.ings} />
                <BuildControls
                    disablecontrols={disablecontrols}
                    addClicked={this.addIngredient}
                    removeClicked={this.removeIngredient}
                    purchaseable={purchaseable}
                    orderDetailsHandler={this.orderDetailsHandler} />
            </Aux>)
        }

        return (
            <div className={classes.BurgerBuilder}>
                {burger}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
        error: state.error
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addIngredient: (ingName) => dispatch(actions.addIngredients(ingName)),
        fetchIngredients: () => dispatch(actions.fetchIngredients()),
        removeIngredient: (ingName) =>dispatch(actions.removeIngredients(ingName))
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);