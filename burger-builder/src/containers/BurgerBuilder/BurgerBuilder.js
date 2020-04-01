import React,{ Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Layout/Burger/Burger";
import classes from './BurgerBuilder.css'
import BuildControls from "../../components/BuildControls/BuildControls";

class BurgerBuilder extends Component{
    constructor(){
        super();
    }
    addIngredient = (type) =>{

    }
    removeIngredient = (type) =>{

    }
    render(){
        return (
            <div className={classes.BurgerBuilder}>
                 <Burger/>
                 <BuildControls addClicked={this.addIngredient} removeClicked={this.removeIngredient} />
            </div>
        )
    }
}
export default BurgerBuilder;