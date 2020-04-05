import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) =>{
    let ingredients = Object.keys(props.ingredients)
                        .map(ingKey =>{
                            return [...Array(props.ingredients[ingKey])]
                            .map((_,index)=>{
                                return <BurgerIngredient type={ingKey} key={ingKey+index}/>
                            })
                        })
                        .reduce((arr, el) => {
                            return arr.concat(el)
                        }, [])
                        
    console.log(ingredients);
    if(!ingredients.length){
        ingredients = <p style={{
            textAlign: "center"
        }}>Try adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}
export default Burger;