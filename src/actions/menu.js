export const UPDATE_MENU_STATUS = 'UPDATE_MENU_STATUS'
export const UPDATE_CART = 'UPDATE_CART'
export const UPDATE_MENU = 'UPDATE_MENU'
export const UPDATE_CATEGORYPAGE = 'UPDATE_CATEGORYPAGE'
export const UPDATE_PRODUCTPAGE = 'UPDATE_PRODUCTPAGE'
export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export let actionUpdateMenuStatus = (menuStatus) => {
  // console.log('RUNNING actionUpdateMenuStatus')
  console.log(menuStatus)
  return { type: UPDATE_MENU_STATUS, payload: menuStatus}
}

export let actionUpdateCart = (item) => {
  console.log('RUNNING actionUpdateCart', item)
  return { type: UPDATE_CART, payload: item}
}

export let actionUpdateCategoryMenu = (categories) => {
  // console.log('RUNNING actionUpdateCategoryMenu', categories)
  return { type: UPDATE_MENU, payload: categories}
}

export let actionUpdateCategoryPage = (categoryProducts) => {
  // console.log('RUNNING actionUpdateCategoryPage', categoryProducts)
  return { type: UPDATE_CATEGORYPAGE, payload: categoryProducts}
}

export let actionUpdateProductPage = (product) => {
  console.log('RUNNING actionUpdateProductPage', product)
  return { type: UPDATE_PRODUCTPAGE, payload: product}
}
