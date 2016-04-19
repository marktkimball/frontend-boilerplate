
export default store => next => action  => {
  process.env.NODE_ENV !== 'production' && console.log(action)
  return next(action)
}
