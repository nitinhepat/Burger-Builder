import * as actionTypes from '../actions/actionTypes'
const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false
}

const addIngredient = (state, action) => {
    const updateIngredients = { ...state.ingredients };
    updateIngredients[action.ingredientName] = updateIngredients[action.ingredientName] + 1
    const ingredients = {
        ingredients: updateIngredients
    }
    return {
        ...state,
        ...ingredients
    }
}
const removeIngredient = (state, action) => {
    const updateIngredients = { ...state.ingredients };
    updateIngredients[action.ingredientName] = updateIngredients[action.ingredientName] - 1
    const ingredients = {
        ingredients: updateIngredients
    }
    return {
        ...state,
        ...ingredients
    }
}
const fetchIngredients = (state,action) =>{
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
}

const fetchIngredientFailed = (state,action) =>{
    const fetchError = {
        error: true
    }
    return {
        ...state,
        ...fetchError
    }
}
const BurgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action)
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action)
        case actionTypes.FETCH_INGREDIENT:
            return fetchIngredients(state,action);
        case actionTypes.FETCH_INGREDINT_FAILED:
            return fetchIngredientFailed(state,action)
        default:
            return state;
    }
}

export default BurgerReducer;