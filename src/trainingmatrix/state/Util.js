export const getValues = ((state, initialState) => {
  var o = {}
  for (const [key] of Object.entries(initialState)) {
    o[key] = state[key]
  }
  return o
})

export const getTheColor = ((certification) => {
  //console.log(certification)
  var color = 'green'
  switch (certification) {
    case 'notapplicable':
      color = 'white'
      break;
    case 'intraining':
      color = 'red'
      break;
    case 'developing':
      color = 'goldenrod'
      break;
    case 'certified':
      color = 'green'
      break;
    case 'trainer':
      color = 'blue'
      break;
    case 'mastertrainer':
      color = 'purple'
      break;
    default:
      break;
  }
  return color;
})
