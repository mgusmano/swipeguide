import React, { useState, useEffect } from 'react';
import { useMatrixState } from '../state/MatrixProvider';
import Papa from 'papaparse';
import { DataGrid } from '@material-ui/data-grid';
import { API, graphqlOperation } from 'aws-amplify'
import { createSkill, deleteSkill, updateSkill } from '../graphql/mutations'
//import { listSkills } from '../../graphql/queries'
import { styles } from '../styles';

const CsvDataSkill = (props) => {
  const matrixState = useMatrixState();
  const [filename, setFileName] = useState('')
  const [csvitems, setCSVItems] = useState([])
  const [csvitemsstring, setCSVItemsString] = useState('')

  useEffect(() => {
    //getDataSkills()
  },[])

  async function updateCert(payload) {
    await API.graphql(graphqlOperation(updateSkill, { input: payload } ))
    getDataSkills()
  }


  async function getDataSkills() {
    // const skillData = await API.graphql(graphqlOperation(listSkills,{type: 'id',sortDirection: 'ASC'}))
    // var o = skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    // setSkills(o)

    matrixState.setActive(true)
    matrixState.setAll(false)
  }

  async function onClickDeleteAllSkills() {
    var result = window.confirm('Are you sure you want to delete?  This cannot be undone!');
    if (result == false) { return }

    Promise.allSettled(matrixState.skills.map(item => {
      return API.graphql(graphqlOperation(deleteSkill, { input: {id: item.id } } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataSkills()
    })
  }

  async function onClickAddAllSkills() {
    if (csvitems.length === 0) {
      alert('No CSV data has been selected')
      return
    }

    if (matrixState.skills.length !== 0) {
      alert('Cannot import CSV when there are existing rows in the database')
      return
    }

    Promise.allSettled(csvitems.map((item,i) => {
      return API.graphql(graphqlOperation(createSkill, { input: {id: i+1, skillName: item.skillName, goal: item.goal} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      setCSVItems([])
      getDataSkills()
      document.getElementById("fileinputskill").value = "";
    })
  }

  const parseIt = (file) => {
    Papa.parse(file, {
      header: true,
      error: function(results, file) {
        console.log(results)
      },
      complete: function(results, file) {
        if (results.meta.fields[0] !== 'skillName') {
          setCSVItems([])
          document.getElementById("fileinputskill").value = "";
          alert('bad file - it is not correctly formatted as an skill CSV file')
          return
        }
        var rowsL = []
        var rowsLString = ''
        results.data.map((row,i)=>{
          row.id = i + 1
          rowsL.push(row)
          rowsLString = rowsLString + row.skillName.toString() + ',' + row.goal.toString() + '\r\n'
        })
        setCSVItems(rowsL)
        setCSVItemsString(rowsLString)
      }
    })
  }

  var skillColumns = [
    {field: 'id',headerName: 'id',width: 100,editable: false},
    {field: 'skillName',headerName: 'skillName',width: 200,editable: true},
    {field: 'goal',headerName: 'goal',width: 120,editable: true},
    {field: 'createdAt',headerName: 'createdAt',width: 200,editable: false},
    {field: 'updatedAt',headerName: 'updatedAt',width: 200,editable: false},
  ]

  return (
      <div style={{display:'flex',flexDirection:'column',height:'400px',xflex:1,border:'1px solid rgb(51, 124, 182)',margin:10}}>
        <div className='toolbar' style={{...styles.h,height:40,background:'rgb(51, 124, 182)',color:'white'}}>
          <div style={{fontSize:18,margin:10}}>Skills</div>
        </div>
        <div className='toolbar' style={{...styles.h,height:40,marginTop: 5,alignContent:'space-between'}}>

          <input className="custom-file-input" id='fileinputskill' type="file" style={{marginLeft:'10px',marginTop:2,width:'190px',height:'30px'}}
            onChange={(event)=> {
              setFileName(event.target.files[0].name)
              parseIt(event.target.files[0])
            }}
          />
          <button style={{marginLeft:'40px',width:'250px',height:'30px'}}
            onClick={()=>onClickAddAllSkills()}
          >
            Generate From CSV Data To Database
          </button>
          <div style={{flex:1}}></div>
          <button style={{marginRight:'10px',width:'250px',height:'30px'}}
            onClick={()=>onClickDeleteAllSkills()}
          >
            Delete All Skills From Database
          </button>
        </div>
        <div className='data' style={{...styles.h,flex:1,border:'0px solid red'}}>
          <div style={{...styles.v,width:'200px',margin:'10px 10px 10px 10px'}}>
            <div>CSV Data: {filename}</div>
            <textarea rows="8" value={csvitemsstring} cols="50"
              onChange={() => {}}
            />
                      <a style={{marginLeft:1,marginTop:7}} href="/data/skills.csv" download>Example CSV</a>
              {/* {csvitems.map((csvitem,i) => {
                return (
                  <div key={i}>{csvitem.skillName}</div>
                )
              })} */}
          </div>
          {matrixState.skills !== [] &&
            <div style={{ ...styles.v,flex:1}}>
              <DataGrid
                onEditCellChangeCommitted={(params) => {
                  var c = {
                    id: params.id,
                    skillName: params.props.value
                  }
                  updateCert(c)
                }}
                headerHeight={25}
                rowHeight={25}
                hideFooter={true}
                pageSize={100}
                rows={matrixState.skills}
                columns={skillColumns}
                xcheckboxSelection
                xdisableSelectionOnClick
              />
            </div>
          }
        </div>
      </div>
  )
}

export default CsvDataSkill