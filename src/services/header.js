export const createAutorizationHeader = (userName, password) => {
  const myHeaders = new Headers()
  myHeaders.set('Authorization', 'Basic ' + btoa(userName + ':' + password))
  return { headers: myHeaders }
}
