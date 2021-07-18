import React, {
  useContext,
  useEffect
} from 'react'

import {
  IngredientsContext
} from './ingredients.provider'

export const IngredientsList = () => {
  const { state, dispatch } = useContext(IngredientsContext)
  const {
    filteredIngredients
  } = state

  return (
    <section className="ingredients-list">
      {filteredIngredients.length > 0 ? (
        <p>{filteredIngredients.length} ingredients found</p>
      ) : (
        <p>No ingredients found</p>
      )}
    </section>
  )
}
