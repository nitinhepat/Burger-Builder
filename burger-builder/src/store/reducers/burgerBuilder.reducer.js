import * as actionTypes from '../actions/actionTypes'
const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false
}
 const BurgerReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const updateIngredients = {...state.ingredients};
            updateIngredients[action.ingredientName] = updateIngredients[action.ingredientName] + 1
            const ingredients = {
                ingredients: updateIngredients
            }
            return {
                ...state,
                ...ingredients
            }
        case actionTypes.FETCH_INGREDIENT:
            const ings = {
                ingredients: {
                salad: action.ingredients.salad,
                bacon: action.ingredients.bacon,
                cheese: action.ingredients.cheese,
                meat: action.ingredients.meat
            }
        };
            return {
                ...state,
                ...ings
            }

        case actionTypes.SET_INGREDIENT:
        case actionTypes.FETCH_INGREDINT_FAILED:
            const fetchError = {
                error: true
            }
            return {
                ...state,
                ...fetchError
            }
        default:
             return state;
    }
}

export default BurgerReducer;