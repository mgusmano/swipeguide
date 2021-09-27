import React from 'react'
// import ReactFC from "react-fusioncharts";
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
// import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune';
// import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
// import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';
// import FusionCharts from 'fusioncharts';

//import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import './Chart.css'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

// Resolves charts dependancy
//ReactFC.fcRoot(FusionCharts, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme);

class Chart extends React.Component {

  render() {
    const { dataSource , type} = this.props;
    //let chartType = 'column2d';
    // if (dataSource && dataSource.categories) {
    //   dataSource.chart.labelDisplay = dataSource.categories[0].category.length > 2 ? 'rotate' : 'auto'
    //   chartType = dataSource.categories[0].category.length > 2 ? 'scrollline2d' : 'msColumn2D'
    // }

    return (



<ReactFC
  className='chart'
  type={type}
  width="100%"
  height="100%"
  dataFormat="JSON"
  dataSource={dataSource}
/>




    );
  }
}

export default Chart;


// return (
//   // <div style={{display:'flex',flex:'1'}}>
//     <div style={{width:'100%',height:'100%',border:'1px solid red'}}></div>
//   {/* <ReactFC
//     type={chartType}
//     width="100%"
//     height="70%"
//     dataFormat="JSON"
//     dataSource={dataSource}
//   /> */}
//   // </div>
// );



