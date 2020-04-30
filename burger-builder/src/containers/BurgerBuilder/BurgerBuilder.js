import React,{ Component } from "react";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Layout/Burger/Burger";
import classes from './BurgerBuilder.css'
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from '../../axio-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
class BurgerBuilder extends Component{
    // state = 
    constructor(){
        super();
        this.state = {
            ingredients: null,
            show: false,
            ingredientsErr: false
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
    purchaseContinue = () =>{

    }
    purchaseCancel = () =>{
        this.setState({
            show: false
        })
    }

    getIngredients(){
        axios.get('ingredients.json')
        .then( response => {
            this.setState( { ingredients: response.data } );
        } )
        .catch( error => {
            console.error("In error")
            this.setState( { ingredientsErr: true } );
        } );
    }
    componentDidMount(){
        console.log("In component did mount");
        this.getIngredients();
    }
    render(){
        console.log('In render');
        const disablecontrols = {...this.state.ingredients};
        for(let key in disablecontrols){
            disablecontrols[key] = disablecontrols[key] <= 0
        }
        let burger = this.state.ingredientsErr 
                     ? <h3>Ingredients can't be loaded!</h3>
                     : <Spinner/>;
        if(this.state.ingredients){
            const purchaseable = Object.keys(this.state.ingredients)
            .reduce((acc,ele)=>{
                return acc = acc + this.state.ingredients[ele]
            },0)

          burger =  (<Aux>
            <Modal show={this.state.show} clicked={this.purchaseCancel}>
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    purchaseContinue={this.purchaseContinue}
                    purchaseCancel={this.purchaseCancel}
                   
                    />
                </Modal>
                 <Burger ingredients={this.state.ingredients}/>
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
export default BurgerBuilder;