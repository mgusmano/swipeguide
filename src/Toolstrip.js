
import { useAppState } from './state/AppProvider';
export const Toolstrip = (props) => {
  const appState = useAppState();

  // const replaceMatrixData = () => {
  //   async function fetchData() {
  //     const certificationsnewResult = await axios("data/trainingmatrix/data/certificationsnew.json");
  //     setCertificationsData(certificationsnewResult.data)
  //   }
  //   fetchData();
  // }

  return (
    <div style={{display:'flex',flexDirection:'row',height:'40px',padding:'5px',background:'gray'}}>
      <button onClick={()=>{ appState.setLegend(!appState.legend)}}>Legend</button>
      <button style={{marginLeft:'10px'}} onClick={()=>{appState.setMultiplier(appState.multiplier-1)}}>smaller</button>
      <button onClick={()=>{appState.setMultiplier(appState.multiplier+1)}}>bigger</button>
      <div style={{marginLeft:'10px',marginTop:'12px'}}>{appState.multiplier}</div>
      {/* <div style={{marginLeft:'30px',marginTop:'10px'}}>cell clicked:</div>
      <input
        style={{width:'30px'}}
        type="text"
        value={textMessage}
        onChange={()=>{}}
      /> */}
      <div style={{marginLeft:'30px',marginTop:'10px'}}>groups:</div>
      <select style={{width:'100px'}}
        onChange={(event) => {
          appState.setGroupID(event.target.value)
        }}>
        {appState.groups !== null &&
          appState.groups.map((group,i) => {
            return <option key={i} value={group.groupID}>{group.groupName}</option>
          })
        }
      </select>
      <div style={{margin:'10px',marginLeft:'70px'}}>v2021-11-12-h</div>
    </div>
  )
}