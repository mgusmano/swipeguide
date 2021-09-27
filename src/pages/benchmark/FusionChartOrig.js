import React from 'react'
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import "./FusionChart.css"

import Charts from 'fusioncharts/fusioncharts.charts';
import Maps from "fusioncharts/fusioncharts.maps";
import World from "fusioncharts/maps/fusioncharts.world";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// import Column2D from "fusioncharts/fusioncharts.charts";
// import TreeMap from "fusioncharts/fusioncharts.treemap";
// import Widgets from "fusioncharts/fusioncharts.widgets";
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
// import CandyTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
// import ZuneTheme from 'fusioncharts/themes/fusioncharts.theme.zune';
// import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
// import CarbonTheme from 'fusioncharts/themes/fusioncharts.theme.carbon';
// Resolves charts dependancy
//ReactFC.fcRoot(FusionCharts, Widgets, Maps, World, TreeMap, Column2D, FusionTheme, GammelTheme, CandyTheme, ZuneTheme, OceanTheme, CarbonTheme);

ReactFC.fcRoot(FusionCharts, Charts, Maps, World, FusionTheme)

class FusionChartOrig extends React.Component {

  render() {
    const { type, dataSource } = this.props;
    //let chartType = 'scrollline2d';
    // if (dataSource && dataSource.categories) {
    //   dataSource.chart.labelDisplay = dataSource.categories[0].category.length > 2 ? 'rotate' : 'auto'
    //   chartType = dataSource.categories[0].category.length > 2 ? 'scrollline2d' : 'msColumn2D'
    // }

    //console.log(chartType)
    return (
      <ReactFC
        className='fusioncharts-parent border'
        type={type}
        width="200"
        height="100"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default FusionChart;