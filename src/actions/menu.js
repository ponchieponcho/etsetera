export const UPDATE_MENU_STATUS = 'UPDATE_MENU_STATUS'
export const UPDATE_CART = 'UPDATE_CART'
export const UPDATE_MENU = 'UPDATE_MENU'
export const UPDATE_CATEGORYPAGE = 'UPDATE_CATEGORYPAGE'

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