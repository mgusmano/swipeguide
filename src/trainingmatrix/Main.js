import React, { useState, useEffect} from 'react';
import { useMatrixState } from './state/MatrixProvider';
import { Diamond } from './Diamond';

export const Main = (props) => {
  const matrixState = useMatrixState();
  const [diamonddata, setDiamondData] = useState(null)
  const [metadata, setMetaData] = useState(null)
  const [certification, setCertification] = useState(null)
  const [startDate, setStartDate] = useState(new Date());

  var operator = {}
  var skill = {}
  var certificationID = "0"

  if (matrixState.celldata.meta !== undefined) {
    operator = matrixState.celldata.operator
    skill = matrixState.celldata.skill
    certificationID = matrixState.celldata.certificationID
  }

  useEffect(() => {
    if (matrixState.celldata.meta === undefined) {
      setDiamondData(null)
      setMetaData(null)
      setCertification(null)
      return
    }
    var data = matrixState.celldata.data
    var meta = matrixState.celldata.meta
    if (typeof data === 'string') {
      data = JSON.parse(data)
    }
    if (typeof meta === 'string') {
      meta = JSON.parse(meta)
    }

    setDiamondData(data)
    setMetaData(meta)
    setCertification(meta.certification)

    if (meta.start !== undefined) {
      setStartDate(new Date(meta.start))
    }
  },[props.data.meta.certification])

  const onCertificationChange = async (event) => {
    if (metadata.type === 'solid') {
      var metaval = {"type":"solid","certification":event.target.value,"strokecolor":"black","letter":"","start":"8/3/2021"}

      var newCerts = matrixState.certifications.slice();
      var certString = certificationID.toString()
      const lastCertIndex = newCerts.findIndex(
        (cert) => cert.id === certString
      )
      if (lastCertIndex !== -1) {
        newCerts[lastCertIndex] = {
          "id": certificationID,
          "operatorID": operator.id,
          "skillID": skill.id,
          "meta": metaval,
          "data": []
        }
      }

      setMetaData(metaval)
      setCertification(event.target.value)
      var c = {
        id: certificationID,
        skillID: skill.id,
        operatorID: operator.id,
        certification: event.target.value,
        meta: metaval,
        skills: matrixState.skills,
        operators: matrixState.operators,
        certifications: newCerts,
        multiplier: matrixState.dimensions.multiplier
      }
      matrixState.updateCert(c)
    }
  }

  return (
    <div style={{padding:'10px'}}>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',flexDirection:'column',xheight:'100px',borderBottom: '0px solid black'}}>
            <div style={{marginLeft:'30px',fontSize:'20px'}}>{skill.skillName}</div>
          </div>
          <div style={{margin:'30px',display:'flex',flexDirection:'column'}}>
            Date Started: {startDate.toLocaleDateString()}
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{marginLeft:'30px',display:'flex',flexDirection:'column'}}>
              Certification:
              <div><input value="notapplicable" checked={certification === 'notapplicable'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Not Applicable</div>
              <div><input value="intraining" checked={certification === 'intraining'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> In Training</div>
              <div><input value="notproficient" checked={certification === 'notproficient'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Not Proficient</div>
              <div><input value="certified" checked={certification === 'certified'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Certified</div>
              <div><input value="trainer" checked={certification === 'trainer'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Trainer</div>
              <div><input value="supertrainer" checked={certification === 'supertrainer'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Super Trainer</div>
            </div>
            <svg style={{marginLeft:'30',marginTop:'5'}} width="50" height="50">
              {diamonddata !== null && metadata !== null &&
              <Diamond meta={metadata} data={diamonddata} boxSize={40} padding={25}/>
              }
            </svg>
          </div>
        </div>
        <div style={{marginTop:'30px',marginLeft:'30px'}}>
          <a href="http://www.microsoft.com">Certification Form</a>
        </div>
        <div style={{fontSize:'12px',marginTop:'20px'}}>certificationID: {certificationID} - skill.id: {skill.id} - operator.id: {operator.id}</div>
      </div>
    </div>
  )
}
