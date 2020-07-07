
import * as actionTypes from './actionTypes'
import axiosInstance from '../../axio-orders'


export const addIngredients = (name) =>{
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) =>{
    return {
        type: actionTypes.FETCH_INGREDIENT,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () =>{
    return {
        type: actionTypes.FETCH_INGREDINT_FAILED,
        ingredientsErr: true
    }
}
export const fetchIngredients = () =>{
    return (dispatch)=>{
        axiosInstance.get('ingredients.json')
        .then(response => {
            dispatch(setIngredients(response.data))
        })
        .catch(error => {
            console.error("In error")
            dispatch(fetchIngredientsFailed())
        });
    }
}