import { useBenchmarkState } from './state/BenchmarkProvider';
import { FusionChart } from "./FusionChart";

export const Center = (() => {
  const benchmarkState = useBenchmarkState();
  console.log(benchmarkState.dataSource)
  return (
    <div style={{display:'flex',flex:'1',height:'100%',width:'100%',overflow:'hidden'}}>
      {/* {benchmarkState.userAssessmentReportData !== null &&
        <FusionChart type='scrollline2d' dataSource={benchmarkState.userAssessmentReportData}/>
      } */}

      {benchmarkState.dataSource !== null &&
        <FusionChart type='scrollline2d' dataSource={benchmarkState.dataSource}/>
      }
    </div>
  )
})
