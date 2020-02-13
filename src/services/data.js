'use strict'
import 'babel-polyfill'

export const getApiInfo = async (url, config) => {
  const response = await fetch(
    url,
    config
  )

  if (response.status === 200) {
    return await response.json()
  } else {
    const errorCode = response.status
    const res = await response.json()
    const errorMessage = `Error, code: ${errorCode}: ${res.Message}`
    return { str: errorMessage, err: res }
  }
}
