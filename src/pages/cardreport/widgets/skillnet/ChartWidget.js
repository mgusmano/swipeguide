import React, { useState, useEffect } from 'react';
import axios from "axios";
import Chart from './Chart'

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ChartWidget = (props) => {
  const {name, data} = props
  const [chartdata, setChartData] = useState(null)
  const [charttype, setChartType] = useState(null)

  useEffect(() => {
    console.log('useEffect in ChartWidget')
    if (data === undefined) {
      //var name = 'column2d'
      //var name = 'scrollline2d'
      axios
      .get(`./json/${name}.json`, {})
      .then((response) => {
        //console.log(response.data)
        setChartData(response.data)
        setChartType(`${name}`)

        // var arrayLocations = response.data.map(item => {
        //   return {
        //     PartnerLocationID: item.PartnerLocationID,
        //     LocationName: item.LocationName,
        //     Latitude: item.Latitude,
        //     Longitude: item.Longitude
        //   }
        // })
        // //console.log('locations',arrayLocations)
        // originallocations = arrayLocations
        // setFilteredlocations(originallocations)
        // //setLocations(arrayLocations)
        // //setFilteredlocations(arrayLocations)
      })
    }
    else {
      setChartData(data)
      setChartType(`${name}`)
    }

    // window.addEventListener('mjg', onMessage);
    // return function cleanup() {
    //   window.removeEventListener('mjg', onMessage);
    // };

  }, [])


 // <div style={{height:'100px',border:'1px solid gray',background:'white',margin:'10px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

console.log('in ChartWidget')
  return (
    <div style={{display:'flex',flex:'1',border:'1px solid gray',margin:'20px',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      {chartdata !== null &&
      <Chart dataSource={chartdata} type={charttype}/>
      }
    </div>
  )
}

export default ChartWidget