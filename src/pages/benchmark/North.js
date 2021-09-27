import { useBenchmarkState } from './state/BenchmarkProvider';
import Select from "react-select";
import "react-select/dist/react-select.css";
import Button from "@material-ui/core/Button";
import { GRID_FILTER_MODEL_CHANGE } from '@material-ui/data-grid';

export const North = (() => {
  const benchmarkState = useBenchmarkState();

  const selectChangeHandler = (e, name) => {
    let { filterObj } = this.state;
    filterObj[name] = Array.isArray(e)
      ? e.map((data) => data.value)
      : e.value;

    //this.setState({ filterObj });
  };

  const themeHandler = (e) => {
    const { dataSource } = this.state;
    let currentTheme = Array.isArray(e) ? e.map((data) => data.value) : e.value;
    if (dataSource) {
      dataSource.chart.theme = currentTheme
      // this.setState({
      //   theme: currentTheme,
      //   dataSource: dataSource
      // });
    } else {
      // this.setState({
      //   theme: currentTheme
      // });
    }
  }

  const generateGraphData = (e) => {
  }

  const filterChange = (e, type) => {
    console.log(e.target.value)
    switch(type) {
      case 'outputId':
        benchmarkState.setOutputId(e.target.value)
        break;
      case 'theme':
        benchmarkState.setTheme(e.target.value)
        break;
      default:
        break;
    }
  }

  console.log(benchmarkState.filterObj.outputId)

  return (
    <div style={{...benchmarkState.styles.h,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{...benchmarkState.styles.h,justifyContent: 'flex-end'}}>

      {/* output */}
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems: 'center'}}>
          Output:
          {benchmarkState.options !== undefined &&
            <select value={benchmarkState.filterObj.outputId} onChange={(e)=>filterChange(e,'outputId')}>{
              benchmarkState.options.outputOption.map((obj) => {
                return <option value={obj.value}>{obj.label}</option>
              })
            }</select>
          }
          Select Theme:
          {benchmarkState.options !== undefined &&
            <select value={benchmarkState.options.theme} onChange={(e)=>filterChange(e,'theme')}>{
              benchmarkState.options.themeOption.map((obj) => {
                return <option value={obj.value}>{obj.label}</option>
              })
            }</select>
          }




          <Select
            name="outputId"
            style={{ width: '200px',margin:'0 20px 0 10px' }}
            value={benchmarkState.filterObj.outputId}
            defaultValue=""
            onChange={(e) => selectChangeHandler(e, "outputId")}
            xclassName="search-select"
            xoptionalClassName="form-select-option"
            searchable
            options={benchmarkState.outputOption}
            placeholder="Select Graph view..."
            clearable={false}
          />
          Select Theme:
          <Select
            name="theme"
            style={{ width: '200px',margin:'0 20px 0 10px' }}
            value={benchmarkState.theme}
            defaultValue=""
            onChange={themeHandler}
            xclassName="search-select"
            xoptionalClassName="form-select-option"
            searchable
            options={benchmarkState.themeOption}
            placeholder="Select theme..."
            clearable={false}
          />
        </div>
        <Button
          size="medium"
          //className={classes.chartBtn}
          variant="contained"
          color="primary"
          onClick={generateGraphData}
        >
          Create Chart
        </Button>
      </div>
      {/* output */}


        {/* <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            benchmarkState.setUserName('Marc')
          }}
        >Name {benchmarkState.userName}</button>
        <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            benchmarkState.setAll(false)
          }}
        >Set All</button>
        <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            benchmarkState.setOperators(false)
          }}
        >Set Operators</button> */}
      </div>
    </div>
  )
})
