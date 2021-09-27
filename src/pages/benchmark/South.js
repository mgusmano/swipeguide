import { useBenchmarkState } from './state/BenchmarkProvider';

export const South = (() => {
  const benchmarkState = useBenchmarkState();

  return (
    <div style={{...benchmarkState.styles.h,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      south
    </div>
  )
})
