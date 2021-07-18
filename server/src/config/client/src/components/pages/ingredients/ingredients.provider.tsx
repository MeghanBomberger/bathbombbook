import React from 'react'

import {
  IngredientsState,
  IngredientsActions
} from '../../../types/ingredients.types'

export const intitialIngredientState = {
  ingredients: [],
  suppliers: [],
  filteredIngredients: [],
  filteredSuppliers: [],
  isLoading: true,
  errorMessage: ''
}

export const ingredientsReducer = (state: IngredientsState, action: IngredientsActions) => {
  const newState = { ...state }

  switch (action.type) {
    case 'SET_ERROR_MESSAGE': {
      newState.errorMessage = action.payload
      return newState
    }

    case 'CLEAR_ERROR_MESSAGE': {
      newState.errorMessage = ''
      return newState
    }

    case 'INITIATE_DATA': {
      const { ingredients, suppliers } = action.payload
      newState.ingredients = ingredients
      newState.filteredIngredients = ingredients
      newState.suppliers = suppliers
      newState.filteredSuppliers = suppliers
      return newState
    }

    default:
      return state
  }
}

export const IngredientsContext = React.createContext<{
  state: IngredientsState,
  dispatch: React.Dispatch<any>
}>({
  state: intitialIngredientState,
  dispatch: () => null
})
