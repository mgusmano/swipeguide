import React, { useState } from 'react';

//import Pie from './charts/pie/Pie'

import GMI from './images/GMI.png';
import CNA from './images/CNA.png';
import logoImg from './images/logo.png';

//import ProfileDialog from './widgets/skillnet/ProfileDialog'

import CardWidget from './widgets/skillnet/CardWidget'
import MapWidget from './widgets/skillnet/MapWidget'
//import ChartWidget from './widgets/skillnet/ChartWidget'
//import CardReportFooter from './CardReportFooter'

import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'
import Splitter from './layout/Splitter'
//import Separator from './layout/Separator'

import CardWidgetProperties from'./widgets/skillnet/CardWidgetProperties'
//import IconButton from '@material-ui/core/IconButton';

import Tv from '@material-ui/icons/Tv';
import Map from '@material-ui/icons/Map';
import AllInclusive from '@material-ui/icons/AllInclusive';

//import Star from '@material-ui/icons/Star';

import Menu from '@material-ui/icons/Menu';

//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import Button from '@material-ui/core/Button';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const CardReport = (props) => {
  const { showlob, Partner } = props
  const { PartnerID, PartnerName, PersonID } = Partner;
  //const [addWidgetOpen, setAddWidgetOpen] = useState(false);
  const [filterdisplay, setFilterDisplay] = useState('block')
  const [propertywidth] = useState('375px')

  const [cardflex, setCardflex] = useState(1)
  const [mapflex, setMapflex] = useState(0)

  const [alignment, setAlignment] = React.useState('Card');


  //const { SMEOnly } = props
  var SMEOnly = props.SMEOnly

  //console.log(SMEOnly)
  if (SMEOnly === undefined) {
    SMEOnly = false
  }

  // console.log('PartnerID',PartnerID)
  // console.log('PartnerName',PartnerName)
  // console.log('PersonID',PersonID)

  // const handleAddWidgetClose = (values) => {
  //   setAddWidgetOpen(false);
  // };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    switch(newAlignment) {
      case 'Card':
        setCardflex(1)
        setMapflex(0)
        break;
      case 'Map':
        setCardflex(0)
        setMapflex(1)
        break;
      case 'Both':
        setCardflex(1)
        setMapflex(1)
        break;
      default:
        // code block
    }
  };

  const onCloseClick = () => {
    console.log('onCloseClick')
    if (filterdisplay === 'block') {
      setFilterDisplay('none')
    }
    else {
      setFilterDisplay('block')
    }
  };
  //https://material-ui.com/components/material-icons/

  return (
    <Horizontal >
      {/* column 1 */}
      <Vertical style={{flex:'1'}}>

        <div style={{overflow:'hidden',height:'75px',display:'flex',justifyContent:'space-between',flexDirection:'row',background:'lightgray',color:'black',textAlign:'center',fontSize:'24px'}}>

          <div style={{padding:'5px 0 0 20px',fontSize:'12px'}}>
              <img src={logoImg} alt="SKILLNET" style={{width:'90px'}} />
              {SMEOnly === true &&
              <span style={{xmarginLeft:'-2px'}}><i>Risk Control Skills Report</i></span>
              }
              {SMEOnly !== true &&
              <span style={{xmarginLeft:'-2px'}}><i>Card Report</i></span>
              }
          </div>

          {PartnerName === 'CNA' &&
          <div style={{padding:'5px 0 0 0',fontSize:'12px'}}>
            <img src={CNA} style={{marginTop:'10px',width:'90px'}} alt="CNA" />
          </div>
          }

          {PartnerName === 'General Mills' &&
          <div style={{padding:'15px 0 0 0',fontSize:'12px'}}>
            <img src={GMI} style={{marginTop:'10px',width:'90px'}} alt="GMI" />
          </div>
          }

          <div>


            {/* <ToggleButtonGroup
              style={{padding:'5px',marginRight:'20px'}}
              size="small"
              value={alignment}
              exclusive
              onChange={() => setAddWidgetOpen(true)}
            >
              <ToggleButton value="Close" cxolor="primary" style={{width:'100px'}} >
                <Menu />&nbsp;Dialog
              </ToggleButton>
            </ToggleButtonGroup>
            <ProfileDialog open={addWidgetOpen} onClose={handleAddWidgetClose} /> */}



            <ToggleButtonGroup
              style={{padding:'15px 0 0 0',border:'none',marginRight:'20px'}}
              size="small"
              //value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton value="Card" style={{width:'100px'}}>
                <Tv />&nbsp;Card
              </ToggleButton>
              <ToggleButton value="Map" style={{width:'100px'}}>
                <Map />&nbsp;Map
              </ToggleButton>
              <ToggleButton value="Both" style={{width:'100px'}}>
                <AllInclusive />&nbsp;Both
              </ToggleButton>
            </ToggleButtonGroup>

            <ToggleButtonGroup
              style={{padding:'5px',marginRight:'20px'}}
              size="small"
              value={alignment}
              exclusive
              onChange={handleAlignment}
            >
              <ToggleButton value="Close" cxolor="primary" style={{width:'100px'}} onClick={onCloseClick}>
                <Menu />&nbsp;Filters
              </ToggleButton>
            </ToggleButtonGroup>

          </div>

        </div>

        {/* <Separator/> */}
        <CardWidget flex={cardflex} Partner={props.Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={SMEOnly}/>
        <Splitter/>
        <MapWidget flex={mapflex} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID}/>
        {/* <Splitter/>
        <CardReportFooter/> */}
      </Vertical>
      <Splitter/>
      {/* column 2 */}
      <Vertical style={{display:filterdisplay,width:propertywidth}}>
        <CardWidgetProperties propertywidth={propertywidth} Partner={props.Partner} PartnerID={PartnerID} PartnerName={PartnerName} PersonID={PersonID} SMEOnly={SMEOnly} showlob={showlob}/>
      </Vertical>
    </Horizontal>
  )
}

//export default CardReport

// {/* <div style={{flex:'auto', display:'flex', flexDirection:'row'}}>
//       <CardWidget/>
// </div> */}

