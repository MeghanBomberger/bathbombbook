import React, {
  useEffect,
  useReducer
} from 'react'

import {
  IngredientsContext,
  ingredientsReducer,
  intitialIngredientState
} from './ingredients.provider'
import { Header } from '../../header/header.component'
import { IngredientsList } from './ingredients-list.component'

export const Ingredients = () => {
  const [state, dispatch] = useReducer(ingredientsReducer, intitialIngredientState)

  return (
    <IngredientsContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      <Header 
        title="Ingredients"
      />
      <main className="ingredients page">
        <IngredientsList />
      </main>
    </IngredientsContext.Provider>
  )
}
