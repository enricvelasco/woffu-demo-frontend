import React, { useContext } from 'react'
import { getApiInfo, getData } from './services/data'
import { Context } from './Context'
import Spinner from './components/spinner'

const App = () => {
  const { data, isLoading } = useContext(Context)
  console.log('DATA:', data, isLoading)
  /*const myHeaders = new Headers()
  const username = 'hhkgBYNxYd0HIaLwhpzucEkmLr%2fHbDOZ6HkmDvFvjGFG1nnMgmnAcw%3d%3d'
  const url = 'https://app-dev.woffu.com/api/v1AAA/users'

  myHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + ''))

  const params = { headers: myHeaders }
  getApiInfo(url, params)
    .then(res => console.log('RES', res))
    .catch(err => console.log('ERR', err))*/
  /*getData(url, params)
    .then(res => console.log('RESPONSE:', res.json()))
    .catch(err => console.log(err))*/

  /*fetch('https://app-dev.woffu.com/api/v1/users', params)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      console.log(myJson)
    })*/
  return (
    <div>
      <h1>Hi this is React Starter!!</h1>
      {isLoading && <Spinner/>}
      <p>DEMO</p>
    </div>
  )
}

export default App
