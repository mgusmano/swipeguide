//https://thoughtbot.com/blog/structure-for-styling-in-react-native
//import * as Buttons from './buttons'
import * as Colors from './colors'
//import * as Spacing from './spacing'
//import * as Typography from './typography'

//export { Typography, Spacing, Colors, Buttons }
export { Colors }

export const styles = {
  h: {
    display:'flex',
    flexDirection:'row',
    boxSizing:'border-box',
    border:'0px solid red',
  },
  v: {
    display:'flex',
    flexDirection:'column',
    boxSizing:'border-box',
    border:'0px solid blue',
  },

  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0px solid green',
  }
};