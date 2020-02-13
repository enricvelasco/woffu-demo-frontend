'use strict'
import 'babel-polyfill'

export const getApiInfo = async (url, config) => {
  const response = await fetch(
    url,
    config
  )
  const res = await response.json()
  return { code: response.status, content: res }
}
