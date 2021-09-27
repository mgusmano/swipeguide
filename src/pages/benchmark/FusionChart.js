import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import "./FusionChart.css"

import Charts from 'fusioncharts/fusioncharts.charts';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
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

export const FusionChart = ((props) => {
  const { type, dataSource } = props;
  const [size, setSize] = useState(null);

  useEffect(() => {
    ReactFC.fcRoot(FusionCharts, Charts, PowerCharts, Maps, World, FusionTheme)
  },[])

  function observeCallback(entries) {
    var size = entries[0].contentRect
    var s ={
      height: size.height,
      width: size.width,
    }

    if (fusionRef.current !== undefined) {
      //console.log(fusionRef.current.chartObj.resizeTo)
      //var r = fusionRef.current.chartObj.resizeTo(size.width, size.height);
      //var r = fusionRef.current.chartObj.resizeTo(1000, 1000);
      //fusionRef.current.chartObj.setChartAttribute({"borderColor": 'green'});
      //fusionRef.current.chartObj.dispose();
      //fusionRef.current.chartObj.setChartAttribute('width', size.width);
      //console.log(r)
      setSize(s);
    }
    else {
    setSize(s);
    }
  }

  const fusionRef = useRef();

  // const fusionRef = useCallback(node => {
  //   console.log('fusionRef')

  // }, []);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      const observer = new ResizeObserver(observeCallback);
      observer.observe(node);
    }
  }, []);


  //width={size.width}
  //height={size.height}

  return (
    <div ref={measuredRef} style={{display:'flex', flex:'1',height:'100%',width:'100%',boxSizing:'border-box',border:'0px solid red', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
      {size !== null &&
      <ReactFC
        ref={fusionRef}
        className='fusioncharts-parent'
        type={type}
        width={size.width}
        height={size.height}
        dataFormat="JSON"
        dataSource={dataSource}
      />
      }
    </div>
  );

})

//   render() {
//     const { type, dataSource } = this.props;
//     //let chartType = 'scrollline2d';
//     // if (dataSource && dataSource.categories) {
//     //   dataSource.chart.labelDisplay = dataSource.categories[0].category.length > 2 ? 'rotate' : 'auto'
//     //   chartType = dataSource.categories[0].category.length > 2 ? 'scrollline2d' : 'msColumn2D'
//     // }

//     //console.log(chartType)
//     return (
//       <ReactFC
//         className='fusioncharts-parent border'
//         type={type}
//         width="200"
//         height="100"
//         dataFormat="JSON"
//         dataSource={dataSource}
//       />
//     );
//   }
// }

// export default FusionChart;