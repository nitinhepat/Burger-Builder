import React,{ Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Layout/Burger/Burger";
import classes from './BurgerBuilder.css'
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary"

class BurgerBuilder extends Component{
    // state = 
    constructor(){
        super();
        this.state = {
            ingredients: {
                meat:   0,
                bacon:  0,
                cheese: 0,
                salad:  0
            },
            show: false
        }
    }

    orderDetailsHandler = () =>{
        this.setState((prevState)=>{
                return {show: !prevState.show}
        })
    }
    // constructor(){
    //     super();
    // }
    addIngredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        this.setState({ingredients: updatedIngredients});


    }
    removeIngredient = (type) =>{
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = newCount;
        this.setState({
            ingredients: updatedIngredients
        })
    }
    render(){
        const disablecontrols = {...this.state.ingredients};
        for(let key in disablecontrols){
            disablecontrols[key] = disablecontrols[key] <= 0
        }
        return (
            <div className={classes.BurgerBuilder}>
                <Modal show={this.state.show}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                 <Burger ingredients={this.state.ingredients}/>
                 <BuildControls 
                 disablecontrols={disablecontrols}
                 addClicked={this.addIngredient} 
                 removeClicked={this.removeIngredient}
                 orderDetailsHandler={this.orderDetailsHandler} />
            </div>
        )
    }
}
export default BurgerBuilder;