export interface PurchaseUnit {
  listing_url: string,
  name: string,
  package_qty: number,
  price: number,
  purchase_unit_id: number,
  supplier_id: number,
  unit_of_measure: string
}

export interface Ingredient {
  id: number,
  name: string,
  uom: string,
  purchase_units: PurchaseUnit[],
  qty_stock: number,
  restock: boolean,
  type: string
}

export interface Supplier {
  id: number,
  name: string,
  url: string,
  shipping_days: number
}

export interface IngredientsState {
  ingredients: Ingredient[],
  suppliers: Supplier[],
  filteredIngredients: Ingredient[],
  filteredSuppliers: Supplier[],
  isLoading: boolean,
  errorMessage: string
}

export type IngredientsActions =
  | {
    type: 'SET_ERROR_MESSAGE',
    payload: string
  }
  | {
    type: 'CLEAR_ERROR_MESSAGE'
  }
  | {
    type: 'INITIATE_DATA',
    payload: {
      ingredients: Ingredient[],
      suppliers: Supplier[]
    }
  }
