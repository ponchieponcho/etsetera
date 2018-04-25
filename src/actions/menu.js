export const UPDATE_MENU = 'UPDATE_MENU'
export const UPDATE_CART = 'UPDATE_CART'


export let actionUpdateMenu = (menuStatus) => {
  console.log('RUNNING actionUpdateSupList')
  console.log(menuStatus)
  return { type: UPDATE_MENU, payload: menuStatus}
}

export let actionUpdateCart = (item) => {
  console.log('RUNNING actionUpdateCart', item)
  return { type: UPDATE_CART, payload: item}
}
