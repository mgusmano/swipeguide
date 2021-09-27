import { useSimpleState } from './state/SimpleProvider';

export const South = (() => {
  const simpleState = useSimpleState();

  return (
    <div style={{...simpleState.styles.h,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      south
    </div>
  )
})
