import React, { useState } from 'react';
import { useMatrixState } from '../state/MatrixProvider';
import Papa from 'papaparse';
import { DataGrid } from '@material-ui/data-grid';
import { API, graphqlOperation } from 'aws-amplify'
import { createOperator, deleteOperator, updateOperator } from '../graphql/mutations'
//import { listOperators } from '../../graphql/queries'
import { styles } from '../styles';

const CsvDataOperator = (props) => {
  const matrixState = useMatrixState();
  const [filename, setFileName] = useState('')
  const [csvitems, setCSVItems] = useState([])
  const [csvitemsstring, setCSVItemsString] = useState('')

  async function updateOperator(payload) {
    await API.graphql(graphqlOperation(updateOperator, { input: payload } ))
    getDataOperators()
  }

  async function getDataOperators() {
    matrixState.setActive(true)
    matrixState.setAll(false)
  }

  async function onClickDeleteAllOperators() {
    var result = window.confirm('Are you sure you want to delete?  This cannot be undone!');
    if (result == false) { return }

    Promise.allSettled(matrixState.operators.map(item => {
      return API.graphql(graphqlOperation(deleteOperator, { input: {id: item.id } } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        console.log(result)
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataOperators()
    })
  }

  async function onClickAddAllOperators() {
    if (csvitems.length === 0) {
      alert('No CSV data has been selected')
      return
    }

    if (matrixState.operators.length !== 0) {
      alert('Cannot import CSV when there are existing rows in the database')
      return
    }

    Promise.allSettled(csvitems.map((item,i) => {
      return API.graphql(graphqlOperation(createOperator, { input: {id: i+1, operatorName: item.operatorName, goal: item.goal} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      setCSVItems([])
      getDataOperators()
      document.getElementById("fileinputoperator").value = "";
    })
  }

  const parseIt = (file) => {
    Papa.parse(file, {
      header: true,
      error: function(results, file) {
        console.log(results)
      },
      complete: function(results, file) {
        if (results.meta.fields[0] !== 'operatorName') {
          setCSVItems([])
          document.getElementById("fileinputoperator").value = "";
          alert('bad file - it is not correctly formatted as an operator CSV file')
          return
        }
        var rowsL = []
        var rowsLString = ''
        results.data.map((row,i)=>{
          row.id = i + 1
          rowsL.push(row)
          rowsLString = rowsLString + row.operatorName.toString() + ',' + row.goal.toString() + '\r\n'
        })
        setCSVItems(rowsL)
        setCSVItemsString(rowsLString)
      }
    })
  }

  var operatorColumns = [
    {field: 'id',headerName: 'id',width: 100,editable: false},
    {field: 'operatorName',headerName: 'operatorName',width: 200,editable: true},
    {field: 'goal',headerName: 'goal',width: 120,editable: true},
    {field: 'createdAt',headerName: 'createdAt',width: 200,editable: false},
    {field: 'updatedAt',headerName: 'updatedAt',width: 200,editable: false},
  ]

  return (
      <div style={{display:'flex',flexDirection:'column',height:'400px',xflex:1,border:'1px solid rgb(51, 124, 182)',margin:10}}>
        <div className='toolbar' style={{...styles.h,height:40,background:'rgb(51, 124, 182)',color:'white'}}>
          <div style={{fontSize:18,margin:10}}>Operators</div>
        </div>
        <div className='toolbar' style={{...styles.h,height:40,marginTop: 5,width:'100%',alignContent:'space-between'}}>

          <input  className="custom-file-input" id='fileinputoperator' type="file" style={{marginLeft:'10px',marginTop:2,width:'190px',height:'30px'}}
            onChange={(event)=> {
              setFileName(event.target.files[0].name)
              parseIt(event.target.files[0])
            }}
          />
          <button style={{marginLeft:'40px',width:'250px',height:'30px'}}
            onClick={()=>onClickAddAllOperators()}
          >
            Generate From CSV Data To Database
          </button>
          <div style={{flex:1}}></div>
          <button style={{marginRight:'10px',width:'250px',height:'30px'}}
            onClick={()=>onClickDeleteAllOperators()}
          >
            Delete All Operators From Database
          </button>
        </div>
        <div className='data' style={{...styles.h,flex:1,border:'0px solid red'}}>
          <div style={{...styles.v,width:'200px',margin:'10px 10px 10px 10px'}}>
            <div>CSV Data: {filename}</div>
            <textarea rows="8" value={csvitemsstring} cols="50"
              onChange={() => {}}
            />
                      <a style={{marginLeft:1,marginTop:7}} href="/data/operators.csv" download>Example CSV</a>
          </div>
          {matrixState.operators !== [] &&
            <div style={{ ...styles.v,flex:1}}>
              <DataGrid
                onEditCellChangeCommitted={(params) => {
                  var c = {
                    id: params.id,
                    operatorName: params.props.value
                  }
                  updateOperator(c)
                }}
                onCellOut={(params,mouseevent) => {
                  console.log('onCellOut')

                }}
                headerHeight={25}
                rowHeight={25}
                hideFooter={true}
                pageSize={100}
                rows={matrixState.operators}
                columns={operatorColumns}
                xcheckboxSelection
                xdisableSelectionOnClick
              />
            </div>
          }
        </div>
      </div>
  )
}

export default CsvDataOperator