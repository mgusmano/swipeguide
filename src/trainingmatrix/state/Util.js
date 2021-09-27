export const getValues = ((state, initialState) => {
  var o = {}
  for (const [key, value] of Object.entries(initialState)) {
    o[key] = state[key]
  }
  return o
})
