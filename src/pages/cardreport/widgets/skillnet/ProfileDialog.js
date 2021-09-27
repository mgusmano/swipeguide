import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Button, Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable'
import './ProfileDialog.css'
//import * as Widgets from '../widgets'
//import WidgetUtil from '../Util/WidgetUtil'

var widgetArray = []








// for (const [key, value] of Object.entries(Widgets)) {
//   var functionToText = '' + value;
//   //https://www.w3schools.com/icons/google_icons_intro.asp
//   var icon = WidgetUtil.getVar('icon', key, 'settings', functionToText)
//   var title = WidgetUtil.getVar('title', key, key, functionToText)
//   var x = parseInt(WidgetUtil.getVar('x', key, 0, functionToText))
//   var y = parseInt(WidgetUtil.getVar('y', key, 0, functionToText))
//   var width = parseInt(WidgetUtil.getVar('width', key, 400, functionToText))
//   var height = parseInt(WidgetUtil.getVar('height', key, 400, functionToText))
//   widgetArray.push({properties: {position: {x:  x, y:  y}, size:{width: width, height:height}}, defaultTitle: title, type: key, icon: icon})
// }
//console.log(widgetArray)

const ProfileDialog = (props) => {
  //console.log(props)
  const [userresume, setUserResume] = useState(null)



  useEffect(() => {
    //console.log('useEffect ProfileDialog')

    // async function fetchData() {
    //   const result = await axios("https://pokeapi.co/api/v2/pokemon");
    //   console.log(result);
    //   // Now that our results have returned we can use the useState setter to set our data to be the new results.
    //   setData(result.data.results);
    // }
    // fetchData();





    // axios
    // .get('https://skillnetusersapi.azurewebsites.net/api/resume?personid=' + props.PersonID, {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   console.log('resume',response.data)

    //   //setResume(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })


//     <a href="https://azureportal.skillnet.net//services/getdownload.ashx?vp=ResourceMgt:ResourceID=684334"
// xhref="https://skillnetusersapi.azurewebsites.net/api/resume?personid=276202" download>
//   <div>download</div>
//   </a>


  }, []);


  const { onClose, open } = props;

  //console.log(open)

  if (open === true) {
    //console.log(props)
    axios
    .get('https://skillnetusersapi.azurewebsites.net/api/resume?personid=' + props.PersonId, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('resume',response.data)
      var resume = response.data.toString()
      if (resume.slice(-1) !== '=') {
        setUserResume(resume)
      }


    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleClose = () => {
    onClose();
  };

  const handleClick = (widgets) => {
    if (widgets === undefined) {
      onClose(null)
    }
    else {
      onClose([widgets])
    }
    //console.log(width,height)
    //dispatch({type: 'ADD_WIDGET', payload: {x: left, y: top, w: width, h: height, title: title, mode: 'chart', type: type}});
  }

  const PaperComponent = (props) => {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }
//{console.log(widget)}
  return (
    <Dialog style={{zIndex:'3000'}}
      open={open}

      onClose={handleClose}
      PaperComponent={PaperComponent}

    >
      <DialogTitle style={{width:'700px',cursor: 'move'}} id="draggable-dialog-title">Profile Sheet</DialogTitle>
        <DialogContent style={{width:'700px'}} dividers>
          <div className="add-widgets-dialog" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <span></span>

            {userresume !== null &&
            <a href={userresume} download>
              <div style={{margin:'20px',fontSize:'11px'}}>download profile sheet</div>
            </a>
            }

            {userresume === null &&
              <div style={{margin:'20px',fontSize:'11px'}}>no profile sheet available</div>
            }




            {widgetArray.map((widget, index) => {
              return (
                <div key={index} className="add-widgets-cell" onClick={(event) => handleClick(widget)}>
                  <span className="widget-type-name">
                    <i className="material-icons">{widget.icon}</i>{widget.defaultTitle}
                  </span>




                </div>
              )
            })
          }
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={(event) => handleClick()}>Close</Button>
        </DialogActions>
    </Dialog>
  )
}

export default ProfileDialog
