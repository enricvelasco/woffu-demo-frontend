import sortBy from 'lodash/sortBy'

export const sortUpByKey = (items, key) => sortBy(items, [key])
