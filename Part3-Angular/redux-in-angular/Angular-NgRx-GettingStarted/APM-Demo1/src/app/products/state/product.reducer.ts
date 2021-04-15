import { Product } from '../product';
import * as fromRoot from '../state/app.state';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  product: ProductState;
}
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

// export function reducer(state, action) {
//   switch (action.type) {

//     case 'TOGGLE_PRODUCT_CODE':
//       return {
//         ...state,
//         showProductCode: action.payload,
//         myFavoriteMovie: 'Mann'
//       };

//     default:
//       return state;
//   }
// }
//setting initial value
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);
export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);
export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);
// export const getCurrentProductId = createSelector(
//   getProductFeatureState,
//   state => state.currentProductId
// );
// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   getCurrentProductId,
//   (state,currentProductId) => state.products.find(p=>p.id == currentProductId)
// );
// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   getCurrentProductId,
//   (state) => state.products.find(p=>p.id == currentProductId)
// );
export function reducer(state = initialState, action) {
  switch (action.type) {

    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload,
        myFavoriteMovie: 'Mann'
      };

    default:
      return state;
  }
}

//strongly typing state
// export function reducer(state: ProductState, action: ProductState) {
//   switch (action) {

//     case 'TOGGLE_PRODUCT_CODE':
//       return {
//         ...state,
//         showProductCode: action,
//         myFavoriteMovie: 'Mann'
//       };

//     default:
//       return state;
//   }
//}
