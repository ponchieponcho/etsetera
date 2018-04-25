export const UPDATE_MENU = 'UPDATE_MENU'

export let actionUpdateMenu = (menuStatus) => {
  console.log('RUNNING actionUpdateSupList')
  console.log(menuStatus)
  return { type: UPDATE_MENU, payload: menuStatus}
}
