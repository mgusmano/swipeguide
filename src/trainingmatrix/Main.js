import React, { useState, useEffect, forwardRef} from 'react';
import { useMatrixState } from './state/MatrixProvider';
import { Diamond } from './Diamond';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Main = (props) => {
  const matrixState = useMatrixState();

  const [diamonddata, setDiamondData] = useState(null)
  const [metadata, setMetaData] = useState(null)
  const [certification, setCertification] = useState(null)
  const [trainer, setTrainer] = useState(false)
  const [startDate, setStartDate] = useState(new Date());

  var data = props.data.data
  var meta = props.data.meta
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  if (typeof meta === 'string') {
    meta = JSON.parse(meta)
  }

  const operator = props.data.operator
  const skill = props.data.skill
  const certificationID = props.data.certificationID

  //var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + operator.id + '.jpg'

  var img = 'data/trainingmatrix/pictures/' + operator.picture

  const setTheCert = (data,meta) => {
    var num = 0
    data.map((d,i) => {
      if (d.s === 1) {num++}
      return null
    })

    if (meta.status === 'not started') {
      num = -1;
    }

    switch (num) {
      case -1:
        setCertification('notstarted')
        break;
      case 0:
        setCertification('started')
        break;
      case 1:
        setCertification('apprentice')
        break;
      case 2:
        setCertification('beginner')
        break;
      case 3:
        setCertification('intermediate')
        break;
      case 4:
        setCertification('certified')
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    setDiamondData(data)
    setMetaData(meta)
    setTheCert(data,meta)
    if (meta.start !== undefined) {
      setStartDate(new Date(meta.start))
    }
    if (meta.trainer === 'true') {
      setTrainer(true)
    }
    else {
      setTrainer(false)
    }
  },[props,data,meta])

  const onTrainerChange = async (event) => {
    matrixState.setActive(true)
    var metadatalocal = {...metadata};
    if (event.target.value === 'true') {
      setTrainer(true)
      metadatalocal.trainer = "true"
    }
    else {
      setTrainer(false)
      metadatalocal.trainer = "false"
    }
    setMetaData(metadatalocal)
    var c = {
      id: certificationID,
      meta: JSON.stringify(metadatalocal),
      data: JSON.stringify(diamonddata),
    }
    matrixState.updateCert(c)
  }

  const onCertificationChange = async (event) => {
    matrixState.setActive(true)
    var metadatalocal = {...metadata};
    var s25 = 0, s50 = 0, s75 = 0, s100 = 0;
    switch (event.target.value) {
      case 'notstarted':
        metadatalocal.status = 'not started'
        break;
      case 'started':
        metadatalocal.status = 'started'
        break;
      case 'apprentice':
        metadatalocal.status = 'started'
        s25 = 1;
        break;
      case 'beginner':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        break;
      case 'intermediate':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        s75 = 1;
        break;
      case 'certified':
        metadatalocal.status = 'started'
        s25 = 1;
        s50 = 1;
        s75 = 1;
        s100 = 1;
        break;
      default:
        break;
    }

    var dd2 = [{"p":25,"s":s25},{"p":50,"s":s50},{"p":75,"s":s75},{"p":100,"s":s100}]
    setDiamondData(dd2)
    setMetaData(metadatalocal)
    setCertification(event.target.value)
    var c = {
      id: certificationID,
      meta: JSON.stringify(metadatalocal),
      data: JSON.stringify(dd2),
    }
    matrixState.updateCert(c)
  }

  const DatePickerInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div>
      <div style={{fontSize:'24px'}}>Operator: {operator.operatorName}</div>
      <div style={{fontSize:'20px',marginBottom:'10px'}}>Skill: {skill.skillName}</div>
      <div style={{fontSize:'12px',marginBottom:'10px'}}>certificationID: {certificationID} - skill.id: {skill.id} - operator.id: {operator.id}</div>
      <div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex',flexDirection:'row'}}>
            <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

            <svg style={{marginLeft:'30',marginTop:'5'}} width="150" height="150">
            {diamonddata !== null &&
            <Diamond meta={metadata} data={diamonddata} boxSize={140} padding={25}/>
            }
            </svg>

          </div>
          <div style={{margin:'30px',display:'flex',flexDirection:'column'}}>
            Date Started:
            <DatePicker
              customInput={<DatePickerInput />}
              dateFormat="MM/dd/yyyy"
              selected={startDate}
              onChange={async (date) => {
                matrixState.setActive(true)
                setStartDate(date)
                var metadatalocal = {...metadata};
                var d = ('0'+(date.getMonth()+1)).slice(-2)+"/"+('0'+(date.getDate())).slice(-2)+"/"+date.getFullYear();
                metadatalocal.start = d
                setMetaData(metadatalocal)
                var c = {
                  id: certificationID,
                  meta: JSON.stringify(metadatalocal),
                  data: JSON.stringify(diamonddata),
                }
                matrixState.updateCert(c)
              }} />
          </div>

          <div style={{display:'flex',flexDirection:'row'}}>
            <div style={{marginLeft:'30px',display:'flex',flexDirection:'column'}}>
              Certification:
              <div><input value="notstarted" checked={certification === 'notstarted'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Not Started</div>
              <div><input value="started" checked={certification === 'started'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Started</div>
              <div><input value="apprentice" checked={certification === 'apprentice'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Apprentice</div>
              <div><input value="beginner" checked={certification === 'beginner'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Beginner</div>
              <div><input value="intermediate" checked={certification === 'intermediate'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Intermediate</div>
              <div><input value="certified" checked={certification === 'certified'} onChange={onCertificationChange} style={{marginLeft:'20px'}} type="radio" name="percent2" /> Certified</div>
            </div>

            <div style={{marginLeft:'40px',marginTop:'0',display:'flex',flexDirection:'column'}}>
              Trainer:
              <div><input value="false" checked={trainer === false} onChange={onTrainerChange} style={{marginLeft:'20px'}} type="radio" name="trainer" /> No</div>
              <div><input value="true" checked={trainer === true} onChange={onTrainerChange} style={{marginLeft:'20px'}} type="radio" name="trainer" /> Yes</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
