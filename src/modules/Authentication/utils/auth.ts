export const setAccessTokenToLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const setUserIdToLocalStorage = (user_id: string) => {
  localStorage.setItem('user_id', user_id)
}
export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') || ''
}
export const getUserIdFromLocalStorage = () => {
  return localStorage.getItem('user_id') || ''
}

export const LocalStorageEventTarget = new EventTarget()

export const clearTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token')
  const clearTokenEvent = new Event('clearToken')
  LocalStorageEventTarget.dispatchEvent(clearTokenEvent)
}
export const clearUserIdFromLocalStorage = () => {
  localStorage.removeItem('user_id')
  const clearUserIdEvent = new Event('clearUserId')
  LocalStorageEventTarget.dispatchEvent(clearUserIdEvent)
}
