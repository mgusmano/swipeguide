import React, { useState, useEffect } from 'react';
import axios from "axios";
import './CardWidget.css'

import CheckboxWidget from './CheckboxWidget'
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import TreeItem from '@material-ui/lab/TreeItem';
//import TreeView from '@material-ui/lab/TreeView';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import ChevronRightIcon from '@material-ui/icons/ChevronRight';


//const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
//const checkedIcon = <CheckBoxIcon fontSize="small" />;

const DropDown = (props) => {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { who, onChanged, options, name, multiple} = props

  console.log(options)
  console.log(name)

  // {multiple === true &&
  //   renderOption={(options, { selected }) => (
  //     <React.Fragment>
  //       <Checkbox
  //         icon={icon}
  //         checkedIcon={checkedIcon}
  //         style={{ marginRight: 8 }}
  //         checked={selected}
  //       />
  //       {options[name]}
  //     </React.Fragment>
  //   }
  //   )}

  return (
    <Autocomplete
      //ref={refSegments}
      onChange={onChanged}
      style={{width:'100%',marginTop:'20px'}}
      multiple={multiple}
      disableCloseOnSelect={true}
      options={options}
      getOptionLabel={options => typeof options === 'string' ? options : options[name]}
      //defaultValue={[]}
      renderOption={multiple === true ?
        (options, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {options[name]}
          </React.Fragment>
        ) : undefined}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={who}
          placeholder=""
        />
      )}
    />
  )
}

const CardWidgetProperties = (props) => {
  const {SMEOnly, showlob, Partner} = props
  const { PartnerID, PartnerName, PersonID, GroupID } = Partner;

  //title:Card Report//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  const [numberofusersdisplayed, setNumberofusersdisplayed] = useState(null)
  const [buttonlabel, setButtonLabel] = useState('Loading...')
  const [checkboxdisplay, setCheckboxdisplay] = useState('none')
  const [arrowclass, setArrowclass] = useState('')
  const [treedata, setTreeData] = useState(null)

  const [leaders, setLeaders] = useState(null)
  const [smes, setSmes] = useState(null)
  const [lobs, setLobs] = useState(null)


  const [positions, setPositions] = useState(null)
  const [locations, setLocations] = useState(null)
  const [managers, setManagers] = useState(null)
  const [percents, setPercents] = useState(null)
  const [competencygroups, setCompetencyGroups] = useState(null)

  //const [subjectmatterexperts, setSubjectmatterexperts] = useState(null)
  //const [filteredsubjectmatterexperts, setFilteredsubjectmatterexperts] = useState([])

  const [segments, setSegments] = useState(null)
  const [functions, setFunctions] = useState(null)
  const [subfunctions, setSubfunctions] = useState(null)

  const [ratingsourcesstring, setRatingsourcesString] = useState('')
  const [leaderidsstring, setLeaderidsString] = useState('')
  const [smeidsstring, setSmeidsString] = useState('')
  const [lobidsstring, setLobidsString] = useState('')
  const [jobidsstring, setJobidsString] = useState('')
  const [locationidsstring, setLocationidsString] = useState('')
  const [manageridsstring, setManageridsString] = useState('')
  const [percentidsstring, setPercentidsString] = useState('')
  const [segmentidsstring, setSegmentidsString] = useState('')
  const [functionidsstring, setFunctionidsString] = useState('')
  const [subfunctionidsstring, setSubfunctionidsString] = useState('')
  const [skillidsstring, setSkillidsString] = useState('')

  const filterChanged = (checked, who) => {
    console.log(checked,who)
    var suffix = ''
    var idVal = ''
    switch(who) {
      case 'leaders':
        suffix = ''
        idVal = 'LeaderID'
        break;
      case 'smes':
        suffix = ''
        idVal = 'SmeID'
        break;
      case 'lobs':
        console.log('here')
        suffix = ''
        idVal = 'LobID'
        break;
      case 'positions':
        suffix = ':0'
        idVal = 'JobID'
        break;
      case 'locations':
        suffix = ''
        idVal = 'LocationID'
        break;
      case 'managers':
        suffix = ''
        idVal = 'ManagerID'
        break;
      case 'percents':
        suffix = ''
        idVal = 'PercentID'
        break;
      case 'segments':
        suffix = ''
        idVal = 'SegmentID'
        break;
      case 'functions':
        suffix = ''
        idVal = 'FunctionID'
        break;
      case 'subfunctions':
        suffix = ''
        idVal = 'SubfunctionID'
        break;
      case 'skills':
        suffix = ':0'
        idVal = ''
        break;
      default:
        suffix = ''
    }
    var checkedString = ''
    //console.log(Array.isArray(checked))

    if (Array.isArray(checked)) {
      checked.forEach(check => {
        console.log(check)
        if (idVal === '') {
          checkedString = checkedString + check + suffix + ','
        }
        else {
          checkedString = checkedString + check[idVal] + suffix + ','
        }
      })
    }
    else {
      if (checked !== null) {
        checkedString = checked[idVal] + suffix + ','
      }
      else {
        checkedString = ''
      }
    }
    console.log(checkedString)
    var finalString = checkedString.slice(0, -1)
    switch(who) {
      case 'leaders':
        setLeaderidsString(finalString)
        break;
      case 'smes':
        setSmeidsString(finalString)
        break;
      case 'lobs':
        console.log(finalString)
        setLobidsString(finalString)
        break;
      case 'positions':
        setJobidsString(finalString)
        break;
      case 'locations':
        setLocationidsString(finalString)
        break;
      case 'managers':
        setManageridsString(finalString)
        break;
      case 'percents':
        setPercentidsString(finalString)
        break;
      case 'segments':
        setSegmentidsString(finalString)
        break;
      case 'functions':
        setFunctionidsString(finalString)
        break;
      case 'subfunctions':
        setSubfunctionidsString(finalString)
        break;
      case 'skills':
        setSkillidsString(finalString)
        break;
      default:
    }
    setButtonLabel('Click to Apply All Filters')
  };

  // const skillsChanged = (checked) => {
  //   console.log('skillsChanged',checked)
  //   var checkedString = ''
  //   checked.forEach(check => {
  //     checkedString = checkedString + check + ':0,'
  //   })
  //   //setFilteredSkills(checked)
  //   setSkillidsString(checkedString)
  //   setButtonLabel('Apply All Filters')
  // };


  // const skillsChanged = (event, value, reason) => {
  //   var filtersSkills = value.map(skill => {
  //     return skill.SkillName
  //   })
  //   console.log('skillsChanged',filtersSkills)
  //   setFilteredSkills(filtersSkills)
  //   setButtonLabel('Apply All Filters')
  // };




  //const [filteredsegments, setFilteredSegments] = useState([])
  //const refSegments = useRef(null);
  // const segmentsChanged = (event, value, reason) => {
  //   var filtersSegments = value.map(segment => {
  //     return segment.SegmentName
  //   })
  //   console.log('segmentsChanged',filtersSegments)
  //   setFilteredSegments(filtersSegments)
  //   setButtonLabel('Apply All Filters')
  // };


  //const [filteredfunctions, setFilteredFunctions] = useState([])
  //const refSegments = useRef(null);
  // const functionsChanged = (event, value, reason) => {
  //   var filtersFunctions = value.map(funct => {
  //     return funct.FunctionName
  //   })
  //   console.log('functionsChanged',filtersFunctions)
  //   setFilteredFunctions(filtersFunctions)
  //   setButtonLabel('Apply All Filters')
  // };



  // const [filteredsubfunctions, setFilteredSubfunctions] = useState([])
  // //const refSegments = useRef(null);
  // const subfunctionsChanged = (event, value, reason) => {
  //   var filtersSubfunctions = value.map(subfunct => {
  //     return subfunct.SubfunctionName
  //   })
  //   console.log('subfunctionsChanged',filtersSubfunctions)
  //   setFilteredSubfunctions(filtersSubfunctions)
  //   setButtonLabel('Apply All Filters')
  // };





  // const refApplyButton = useRef(null);
  // const refPositions = useRef(null);
  // const refLocations = useRef(null);
  // const refManagers = useRef(null);
  // const refSkills = useRef(null);
  // const refFitpercents = useRef(null);
  // const refSubjectmatterexperts = useRef(null);



  //var PartnerID = 395;  var PartnerName = 'CNA'; var PersonID = 275399;
  //var PartnerID = 426;  var PartnerName = 'General Mills'; var PersonID = 277356;

  useEffect(() => {
    console.log('useEffect CardWidgetProperties')

    setRatingsourcesString(props.Partner.ratingsources)
    onApplyClick()



    if (showlob === true) {
      //Lobs
      console.log('LOB')
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/lob?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        console.log('lobs',response.data)
        var arrayLobs = response.data.map(item => {
          return {
            LobID: item.CustomAttributeValueID,
            LobName: item.CustomAttributeValue
          }
        })
        //console.log('lobs',arrayLobs)
        setLobs(arrayLobs)
      })
      .catch((error) => {
        console.log(error)
      })
    }


    if (SMEOnly === true) {
      //Leaders
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/Leaders?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        //console.log('leaders',response.data)
        var arrayLeaders = response.data.map(item => {
          return {
            LeaderID: item.CustomAttributeValueID,
            LeaderName: item.CustomAttributeValue
          }
        })
        //console.log('leaders',arrayLeaders)
        setLeaders(arrayLeaders)
      })
      .catch((error) => {
        console.log(error)
      })

      //Smes
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/SMEs?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        //console.log('smes',response.data)
        var arraySmes = response.data.map(item => {
          return {
            SmeID: item.CustomAttributeValueID,
            SmeName: item.CustomAttributeValue
          }
        })
        //console.log('smes',arraySmes)
        setSmes(arraySmes)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    if (SMEOnly === false) {

      //Positions
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/PartnerPositions?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arrayPositions = response.data.map(item => {
          return {
            JobID: item.JobID,
            JobName: item.JobName
          }
        })
        console.log('positions',arrayPositions)
        setPositions(arrayPositions)
      })
      .catch((error) => {
        console.log(error)
      })

      //Locations
      axios
      .get('https://skillnetusersapi.azurewebsites.net//api/PartnerLocations?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arrayLocations = response.data.map(item => {
          return {
            LocationID: item.PartnerLocationID,
            LocationName: item.LocationName
          }
        })
        console.log('locations',arrayLocations)
        setLocations(arrayLocations)
      })
      .catch((error) => {
        console.log(error)
      })

      //Managers
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/managers?personid=' + PersonID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        var arrayManagers = response.data.map(item => {
          return {
            ManagerID: item.ManagerID,
            ManagerName: item.ManagerName //+ ' (' + item.ManagerID + ')'
          }
        })
        console.log('managers',arrayManagers)
        setManagers(arrayManagers)
      })
      .catch((error) => {
        console.log(error)
      })

      //FitPercents
      var arrayPercents = [
        { PercentName:'40% and above', PercentID: 40 },
        { PercentName:'45% and above', PercentID: 45 },
        { PercentName:'50% and above', PercentID: 50 },
        { PercentName:'55% and above', PercentID: 55 },
        { PercentName:'60% and above', PercentID: 60 },
        { PercentName:'65% and above', PercentID: 65 },
        { PercentName:'70% and above', PercentID: 70 },
        { PercentName:'75% and above', PercentID: 75 },
        { PercentName:'80% and above', PercentID: 80 },
        { PercentName:'85% and above', PercentID: 85 },
        { PercentName:'90% and above', PercentID: 90 },
        { PercentName:'95% and above', PercentID: 95 },
      ]
      setPercents(arrayPercents)

      // if (PartnerName === 'CNA') {
      //   var arraySubjectmatterexperts = [
      //     { Name:'Gold',   value: 'Gold' },
      //     { Name:'Silver', value: 'Silver' },
      //     { Name:'Bronze', value: 'Bronze' },
      //   ]
      //   setSubjectmatterexperts(arraySubjectmatterexperts)
      // }

      if (PartnerName === 'General Mills') {

        //Segments
        axios
        .get('https://skillnetusersapi.azurewebsites.net/api/segments/', {
          auth: {username: 'skillnet',password: 'demo'}
        })
        .then((response) => {
          console.log(response.data)
          var arraySegments = response.data.map(item => {
            return {
              SegmentID: item.CustomAttributeValueID,
              SegmentName: item.CustomAttributeValue
            }
          })
          console.log('segments',arraySegments)
          setSegments(arraySegments)
        })
        .catch((error) => {
          console.log(error)
        })

        //Functions
        axios
        .get('https://skillnetusersapi.azurewebsites.net/api/functions/', {
          auth: {username: 'skillnet',password: 'demo'}
        })
        .then((response) => {
          var arrayFunctions = response.data.map(item => {
            return {
              FunctionID: item.CustomAttributeValueID,
              FunctionName: item.CustomAttributeValue
            }
          })
          console.log('functions',arrayFunctions)
          setFunctions(arrayFunctions)
        })
        .catch((error) => {
          console.log(error)
        })

        //Subfunctions
        axios
        .get('https://skillnetusersapi.azurewebsites.net/api/subfunctions/', {
          auth: {username: 'skillnet',password: 'demo'}
        })
        .then((response) => {
          var arraySubfunctions = response.data.map(item => {
            return {
              SubfunctionID: item.CustomAttributeValueID,
              SubfunctionName: item.CustomAttributeValue
            }
          })
          console.log('functions',arraySubfunctions)
          setSubfunctions(arraySubfunctions)
        })
        .catch((error) => {
          console.log(error)
        })
      }

      //CompetencyGroups
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/competencygroup?partnerid=' + PartnerID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        console.log('CompetencyGroups-raw',response.data)
        var arrayCompetencyGroups = response.data.map(item => {
          return {
            CompetencyGroupID: item.CompetencyGroupID,
            CompetencyGroupName: item.CompetencyGroupName,
            CompetencyGroupIcon: item.CompetencyGroupIcon,
            CompetencyGroupDisplayOrder: item.CompetencyGroupDisplayOrder
          }
        })

        function compare(a, b) {
          const bandA = a.CompetencyGroupDisplayOrder;
          const bandB = b.CompetencyGroupDisplayOrder;
          let comparison = 0;
          if (bandA > bandB) {
            comparison = 1;
          } else if (bandA < bandB) {
            comparison = -1;
          }
          return comparison;
        }

        arrayCompetencyGroups.sort(compare);
        console.log('CompetencyGroups',arrayCompetencyGroups)
        setCompetencyGroups(arrayCompetencyGroups)
      })
      .catch((error) => {
        console.log(error)
      })

      //Competencies and Skills
      var arrayCompetencies = []
      axios
      .get('https://skillnetusersapi.azurewebsites.net/api/skills?personid=' + PersonID, {
        auth: {username: 'skillnet',password: 'demo'}
      })
      .then((response) => {
        console.log('competencies-raw',response.data)
        arrayCompetencies = response.data.map(item => {
          return {
            CompetencyID: item.SkillID,
            CompetencyName: item.SkillName,
            CompetencyGroupID: item.GroupID,
          }
        })
        console.log('competencies',arrayCompetencies)
        //setCompetencies(arrayCompetencies)

        var f= 'https://skillnetusersapi.azurewebsites.net/api/skills?groupid=' + GroupID + '&parentskillid='
        var arrayAxios = []
        arrayCompetencies.forEach(competency => {
          arrayAxios.push( axios.get(f+competency.CompetencyID,{auth: {username: 'skillnet',password: 'demo'}}))
        })
        Promise.all(arrayAxios)
          .then(function (results) {

            var tree = []
            arrayCompetencies.forEach((competency, index) => {
              var children = []
              results[index].data.forEach(result => {
                var c = {
                  id: result.SkillID.toString(),
                  name: result.SkillName
                }
                children.push(c)
              })

              var o = {
                id: competency.CompetencyID.toString(),
                name: competency.CompetencyName,
                children: children
              }
              tree.push(o)
            })
            //console.log(tree)
            //console.log(JSON.stringify(tree))
            var data = {
              id: 'root',
              name: 'Skills',
              children: tree
            }
            setTreeData(data)
          });
      })
      .catch((error) => {
        console.log(error)
      })
    }



    //    .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&personid=' + PersonID, {
    //  .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=33931&parentskillid=39806', {
    //Skills
    // axios
    // .get('https://skillnetusersapi.azurewebsites.net/api/skills?groupid=' + GroupID + '&parentskillid=39851', {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   console.log('skills-raw',response.data)
    //   var arraySkills = response.data.map(item => {
    //     return {
    //       SkillID: item.SkillID,
    //       SkillName: item.SkillName,
    //       ParentSkillID: item.ParentSkillID,
    //     }
    //   })
    //   console.log('skills',arraySkills)
    //   setSkills(arraySkills)
    // })
    // .catch((error) => {
    //   console.log('skills=error')
    //   console.log(error)
    // })


    // axios
    // .get('https://skillnetusersapi.azurewebsites.net/api/skills?personid=' + PersonID, {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   console.log('skills2',response.data)
    //   setSkills(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })





//    http://skillnetusersapi.azurewebsites.net//api/skills?groupid=33931







  }, [PartnerID, PartnerName]);

  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }

  const onApplyClick = (event) => {
    if (buttonlabel === 'No Filters Selected') {return}

    SendIt('fromcardwaiting', {})

    var url = 'https://skillnetusersapi.azurewebsites.net/api/cardreportusers?' +
    'personid=' + PersonID + '&' +
    'groupid=' + GroupID + '&' +
    'lobids=' + lobidsstring + '&' +
    'leaderids=' + leaderidsstring + '&' +
    'smeids=' + smeidsstring  + '&' +
    'ratingsources=' + ratingsourcesstring + '&' +
    'segmentids=' + segmentidsstring  + '&' +
    'functionids=' + functionidsstring  + '&' +
    'subfunctionids=' + subfunctionidsstring  + '&' +
    'jobids=' + jobidsstring  + '&' +
    'partnerlocationids=' + locationidsstring + '&' +
    'managerids=' + manageridsstring + '&' +
    'percentages=' + percentidsstring + '&' +
    'skillids=' + skillidsstring
    console.log('url',url)

    axios
    .get(url, {
      auth: {username: 'skillnet',password: 'demo'}
    })
    .then((response) => {
      console.log('filtered users', response)
      setNumberofusersdisplayed(response.data.length)
console.log('dummy data here')
console.log(response.data)
      SendIt('fromcardfilteredusers', {users: response.data})
      setButtonLabel('Apply All Filters')
    })
    .catch((error) => {
      console.log(error)
    })
    return

    // const filters = {}
    // if (filteredpositions.length > 0) {
    //   filters.JobName = JobName => filteredpositions.includes(JobName)
    // }
    // if (filteredlocations.length > 0) {
    //   filters.Location = Location => filteredlocations.includes(Location)
    // }
    // if (filteredmanagers.length > 0) {
    //   filters.DirectManagerID = DirectManagerID => filteredmanagers.includes(DirectManagerID)
    // }
    // if (filteredfitpercent !== '') {
    //   if (PartnerName === 'General Mills') {
    //     filters.SelfRating = SelfRating => (SelfRating >= filteredfitpercent) ? true : false
    //   }
    //   else {
    //     filters.ManagerRating = ManagerRating => (ManagerRating >= filteredfitpercent) ? true : false
    //   }
    // }
    // if (filteredsubjectmatterexperts.length > 0) {
    //   filters.sme = sme => filteredsubjectmatterexperts.includes(sme)
    // }
    // if (filteredsegments.length > 0) {
    //   filters.Segment = Segment => filteredsegments.includes(Segment)
    // }
    // if (filteredfunctions.length > 0) {
    //   filters.Function = Function => filteredfunctions.includes(Function)
    // }
    // if (filteredsubfunctions.length > 0) {
    //   filters.SubFunction = SubFunction => filteredsubfunctions.includes(SubFunction)
    // }
    // if (filteredskills.length > 0) {
    //   filters.Skills = filteredskills
    //   //filters.Skills = skill => filteredskills.includes(skill)
    // }
    // console.log('filters',filters)
    // SendIt('fromcard2', {filters: filters})

    // setButtonLabel('Filters Are Applied')
  };

  // const positionsChanged = (event, value, reason) => {
  //   var filtersJobs = value.map(position => {
  //     return position.JobName
  //   })
  //   console.log('positionsChanged',filtersJobs.toString())
  //   setFilteredPositions(filtersJobs)
  //   setButtonLabel('Apply All Filters')
  // };


  // const locationsChanged = (event, value, reason) => {
  //   var filtersLocations = value.map(location => {
  //     return location.LocationName
  //   })
  //   console.log('locationsChanged',filtersLocations)
  //   setFilteredLocations(filtersLocations)
  //   setButtonLabel('Apply All Filters')
  // };

  // const managersChanged = (event, value, reason) => {
  //   var filtersManager = value.map(manager => {
  //     return manager.ManagerID
  //   })
  //   console.log('managersChanged',filtersManager)
  //   setFilteredManagers(filtersManager)
  //   setButtonLabel('Apply All Filters')
  // };

  // const fitpercentsChanged = (event, value, reason) => {
  //   var fitpercents = value.map(fitpercent => {
  //     return fitpercent.PercentID
  //   })
  //   console.log(value)
  //   if (value == null) {
  //     setFilteredfitpercent('')
  //   }
  //   else {
  //     setFilteredfitpercent(fitpercents[0])
  //   }
  //   console.log('fitpercentsChanged',fitpercents[0])
  //   setButtonLabel('Apply All Filters')
  // };

  // const subjectmatterexpertsChanged = (event, value, reason) => {
  //   var filtersSubjectmatterexperts = value.map(subjectmatterexpert => {
  //     return subjectmatterexpert.Name
  //   })
  //   console.log('subjectmatterexpertsChanged',filtersSubjectmatterexperts)
  //   setFilteredsubjectmatterexperts(filtersSubjectmatterexperts)
  //   setButtonLabel('Apply All Filters')
  // };


  const labelIt = (node) => {
    console.log(node)
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox

id={`checkbox-${node.id}`}
//checked={isChecked}
onChange={(e, checked) => console.log('you checked it!', checked)}
onClick={e => (e.stopPropagation())}


        color="primary"
      />
      <Typography variant="caption">{node.name}</Typography>
    </div>
    )
  };

  const label = (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox




        color="primary"
      />
      <Typography variant="caption"></Typography>
    </div>
  );

  const renderTree = (nodes) => (
    <TreeItem className="smallfont" style={{marginTop:'15px',fontSize:'11px'}} key={nodes.id} nodeId={nodes.id} label={labelIt(nodes)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </TreeItem>
  );

  const changeIt = () => {
    if (checkboxdisplay === 'none') {
      setCheckboxdisplay('block')
      setArrowclass('MuiAutocomplete-popupIndicatorOpen')
    }
    else {
      setCheckboxdisplay('none')
      setArrowclass('')
    }
  };


  console.log(leaders)
  //    <div style={{width:propertywidth,padding:'10px'}}>
  return (
    <div style={{width:'100%',padding:'10px'}}>
      <Button
        // ref={refApplyButton}
        style={{width:'100%'}}
        variant="contained"
        onClick={onApplyClick}
      >
        {buttonlabel}
      </Button>

{SMEOnly !== true &&
        numberofusersdisplayed !== null &&
        <div style={{marginTop:'40px'}}>Number of Users Displayed: {numberofusersdisplayed}</div>
}

{/* {numberofusersdisplayed !== null &&
<div style={{marginTop:'40px'}}>Number of Users Displayed: {numberofusersdisplayed}</div>
} */}

{smes !== null &&
<DropDown multiple={true} who="Technical SME" onChanged={(event,checked) => filterChanged(checked,'smes')} options={smes} name="SmeName"/>
}

{leaders !== null &&
<DropDown multiple={true} who="R.C. Home Office Leader" onChanged={(event,checked) => filterChanged(checked,'leaders')} options={leaders} name="LeaderName"/>
}

{lobs !== null &&
<DropDown multiple={true} who="LOBs" onChanged={(event,checked) => filterChanged(checked,'lobs')} options={lobs} name="LobName"/>
}





{positions !== null &&
<DropDown multiple={true} who="Positions" onChanged={(event,checked) => filterChanged(checked,'positions')} options={positions} name="JobName"/>
}
{locations !== null &&
<DropDown multiple={true} who="Locations" onChanged={(event,checked) => filterChanged(checked,'locations')} options={locations} name="LocationName"/>
}
{managers !== null &&
<DropDown multiple={true} who="Managers" onChanged={(event,checked) => filterChanged(checked,'managers')} options={managers} name="ManagerName"/>
}
{percents !== null &&
<DropDown multiple={false} who="Fit Percent" onChanged={(event,checked) => filterChanged(checked,'percents')} options={percents} name="PercentName"/>
}

{/* {null !== null &&
<DropDown multiple={true} who="Skills" onChanged={skillsChanged} options={skills} name="SkillName"/>
} */}

      {/* {fitpercents !== null &&
        <Autocomplete
          ref={refFitpercents}
          onChange={fitpercentsChanged}
          style={{width:'100%',marginTop:'20px'}}
          multiple={false}
          disableCloseOnSelect={true}
          options={fitpercents}
          getOptionLabel={fitpercents => typeof fitpercents === 'string' ? fitpercents : fitpercents.Name}
          //defaultValue={[]}
          renderOption={(fitpercents, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {fitpercents.Name}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Fit Percent"
              placeholder=""
            />
          )}
        />
      } */}


{/* {subjectmatterexperts !== null &&
<DropDown multiple={true} who="Subject Matter Experts" onChanged={subjectmatterexpertsChanged} options={subjectmatterexperts} name="Name"/>
} */}

{segments !== null &&
<DropDown multiple={true} who="Segments" onChanged={(event,checked) => filterChanged(checked,'segments')} options={segments} name="SegmentName"/>
}

{functions !== null &&
<DropDown multiple={true} who="Functions" onChanged={(event,checked) => filterChanged(checked,'functions')} options={functions} name="FunctionName"/>
}
{subfunctions !== null &&
<DropDown multiple={true} who="Sub Functions" onChanged={(event,checked) => filterChanged(checked,'subfunctions')} options={subfunctions} name="SubfunctionName"/>
}

{SMEOnly === false &&
<div style={{marginTop:'20px',padding:'0',border:'0px solid gray'}}>
  <div style={{width:'100%',marginTop:'20px'}} className="MuiInputBase-root MuiInput-root MuiInput-underline MuiAutocomplete-inputRoot MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
    <input aria-invalid="false" placeholder="" type="text" style={{fontWeight:'400',color:'rgba(0, 0, 0, 0.87)'}} className="MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd" aria-autocomplete="list" defaultValue="Skills" id="mui-44339"></input>
    <div className="MuiAutocomplete-endAdornment">
      <button className="MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator" tabIndex="-1" type="button" aria-label="Clear" title="Clear">
          <span className="MuiIconButton-label">
            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </span>
        <span className="MuiTouchRipple-root"></span>
      </button>
      <button className={`MuiButtonBase-root MuiIconButton-root MuiAutocomplete-popupIndicator ${arrowclass}`} tabIndex="-1" type="button" aria-label="Open" title="Open" onClick={changeIt}>
        <span className="MuiIconButton-label">
          <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 10l5 5 5-5z">
            </path>
          </svg>
        </span>
        <span className="MuiTouchRipple-root"></span>
      </button>
    </div>
</div>


<div style={{display:checkboxdisplay}}>
  <CheckboxWidget Partner={Partner} onCheck={(checked) => filterChanged(checked,'skills')}/>
</div>

</div>
}

{/* {null !== null &&
<TreeView
  multiSelect
  style={{marginTop:'15px',fontSize:'11px'}}
  defaultCollapseIcon={<ExpandMoreIcon />}
  defaultExpanded={['root']}
  defaultExpandIcon={<ChevronRightIcon />}
>
  {renderTree(treedata)}
</TreeView>
} */}


{/* <Autocomplete
      id="virtualize-demo"
      style={{ width: 300 }}
      disableListWrap
      //classes={classes}
      ListboxComponent={ListboxComponent}
      //renderGroup={renderGroup}
      options={OPTIONS}
      //groupBy={(option) => option[0].toUpperCase()}
      renderInput={(params) => <TextField {...params} variant="outlined" label="10,000 options" />}
      renderOption={(option) => <Typography noWrap>{option}</Typography>}
    /> */}




    </div>
  )
}

// function random(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';

//   for (let i = 0; i < length; i += 1) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length));
//   }

//   return result;
// }

// const OPTIONS = Array.from(new Array(10))
//   .map(() => random(10 + Math.ceil(Math.random() * 20)))
//   .sort((a, b) => a.toUpperCase().localeCompare(b.toUpperCase()));



// const ListboxComponent = (props) => {

//   const labelIt = (node) => {
//     console.log(node)
//     return (
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//       <Checkbox

// id={`checkbox-${node.id}`}
// //checked={isChecked}
// onChange={(e, checked) => console.log('you checked it!', checked)}
// onClick={e => (e.stopPropagation())}


//         color="primary"
//       />
//       <Typography variant="caption">{node.name}</Typography>
//     </div>
//     )
//   };

//   const renderTree = (nodes) => (
//     <TreeItem className="smallfont" style={{marginTop:'15px',fontSize:'11px'}} key={nodes.id} nodeId={nodes.id} label={labelIt(nodes)}>
//       {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
//     </TreeItem>
//   );

// var treedata = {"id":"root","name":"Skills","children":[{"id":"34635","name":"CNA Insurance ","children":[]},{"id":"34641","name":"RC Process","children":[]},{"id":"34645","name":"Professional RC Skills ","children":[]},{"id":"34652","name":"Cyber Basics  ","children":[]},{"id":"34658","name":"E&O Basics ","children":[]},{"id":"34662","name":"Construction","children":[]},{"id":"34666","name":"Occupany","children":[]},{"id":"34670","name":"Protection ","children":[]},{"id":"34680","name":"Exposures","children":[]},{"id":"34684","name":"Reporting Requirements","children":[]},{"id":"34689","name":"Codes & Regulations - Property","children":[]},{"id":"34692","name":"Equipment & Machinery","children":[]},{"id":"34698","name":"Injury Mgmt - RTW","children":[]},{"id":"34703","name":"Employee Health & Safety","children":[]},{"id":"34713","name":"Workflow Efficiency","children":[]},{"id":"34715","name":"Codes & Regulations - WC","children":[]},{"id":"34718","name":"Driver Selection","children":[]},{"id":"34721","name":"Codes & Regulations - Auto","children":[]},{"id":"34725","name":"Fleet/Vehicle","children":[]},{"id":"34730","name":"Company, Policies & Practices","children":[]},{"id":"34735","name":"Public Protection on Insured's Premise","children":[]},{"id":"34740","name":"Off Premise","children":[]},{"id":"34743","name":"Contracts","children":[]},{"id":"34748","name":"PIAI (Personal Injury Advertising Injury)","children":[]},{"id":"34753","name":"Design of Products","children":[]},{"id":"34758","name":"Manufacturing of Products","children":[]},{"id":"34763","name":"Product in Marketplace","children":[]},{"id":"34766","name":"Product End Life","children":[]},{"id":"34769","name":"Codes & Regulations -PL","children":[]},{"id":"34773","name":"Property - Construction","children":[]},{"id":"34776","name":"Auto - Construction","children":[]},{"id":"34780","name":"GL - Construction","children":[]},{"id":"34783","name":"PL - Construction","children":[]},{"id":"34785","name":"Property - Durable Goods","children":[]},{"id":"34788","name":"Auto - Durable Goods","children":[]},{"id":"34792","name":"Property - Cultural Institutions","children":[]},{"id":"34794","name":"Property - Manufacturing","children":[]},{"id":"34796","name":"Property - Manufacturing (Metals Automotive Component Parts)","children":[]},{"id":"34798","name":"Property - Manufacturing (Furniture, Apparel, Commercial Paper & Printing, Wood)","children":[]},{"id":"34801","name":"WC - Manufacturing (Metals Automotive Component Parts)","children":[]},{"id":"34806","name":"WC - Manufacturing (Furniture, Apparel, Commercial Paper & Printing, Wood)","children":[]},{"id":"34812","name":"Auto - Manufacturing","children":[]},{"id":"34816","name":"GL - Manufacturing","children":[]},{"id":"34818","name":"PL - Manufacturing (Furniture, Apparel, Commercial Paper &  Printing, Wood)","children":[]},{"id":"34820","name":"Property - Real Estate","children":[]},{"id":"34823","name":"GL - Real Estate","children":[]},{"id":"34825","name":"GL - Professional Services (Architects, Engineers, & Design Consultants)","children":[]},{"id":"34865","name":"Claims Investigation","children":[]},{"id":"34867","name":"Management Skills","children":[]},{"id":"34870","name":"Business Skills","children":[]},{"id":"34873","name":"Cyber Monoline","children":[]},{"id":"34880","name":"CNA Insurance - Construction","children":[]},{"id":"34883","name":"WC - Construction (Utility Contractors)","children":[]},{"id":"34887","name":"WC - Construction (Roofers)","children":[]},{"id":"34890","name":"WC - Construction (Street & Road)","children":[]},{"id":"34895","name":"WC - Construction (Tunnels, Bridge Erection)","children":[]},{"id":"34900","name":"GL - Construction (Pools/Spas)","children":[]},{"id":"34903","name":"CNA Insurance - Manufacturing","children":[]},{"id":"34905","name":"E&O - Manufacturing","children":[]},{"id":"34909","name":"Property - Manufacturing (Industrial Machinery, Commercial Electrical Equipment/Appliances, Transporation Equipment)","children":[]},{"id":"34911","name":"Property - Manufacturing (Plastics)","children":[]},{"id":"34913","name":"WC - Manufacturing (Electronic Component & Hardware Manufacturing)","children":[]},{"id":"34915","name":"WC - Manufacturing (Industrial Machinery, Commercial Electrical, Equipment/Appliances, Transportation Equipment","children":[]},{"id":"34921","name":"WC - Manufacturing (Plastics)","children":[]},{"id":"34925","name":"WC - Manufacturing (Pre Cast)","children":[]},{"id":"34931","name":"PL - Manufacturing (Electronic Component & Hardware Manufacturing)","children":[]},{"id":"34933","name":"E&O - Technology","children":[]},{"id":"34937","name":"Property - Technology (Electronic Component & Hardware Manufcaturing w/Semi Conductor Fabless)","children":[]},{"id":"34939","name":"Property - Technology (Electronic Component & Hardware Manufcaturing w/Semi Conductor Fabrication)","children":[]},{"id":"34950","name":"Property - Technology (Software & IT Services/Data Center)","children":[]},{"id":"34956","name":"E&O - Healthcare","children":[]},{"id":"34960","name":"Property - Healthcare","children":[]},{"id":"34968","name":"WC - Healthcare (Hospital)","children":[]},{"id":"34973","name":"Auto - Healthcare","children":[]},{"id":"34976","name":"GL - Healthcare","children":[]},{"id":"34978","name":"Property - Life Science","children":[]},{"id":"34987","name":"WC - Life Science","children":[]},{"id":"34992","name":"WC - Life Science (Pharmaceutical Companies)","children":[]},{"id":"34997","name":"Auto - Life Science","children":[]},{"id":"34999","name":"GL - Life Science","children":[]},{"id":"35001","name":"PL - Life Science","children":[]},{"id":"35004","name":"PL - Life Science (Academic Institutions/Healthcare Org)","children":[]},{"id":"35006","name":"PL - Life Science (Contractors, Manufacturing Org (CMO), Research Org (CRO), Service Org (CSO))","children":[]},{"id":"35008","name":"PL - Life Science (Medical Device Manufacturers)","children":[]},{"id":"35010","name":"WC - Federal Gov Contractors","children":[]},{"id":"35012","name":"GL - Federal Gov Contractors","children":[]},{"id":"35014","name":"Facility Equipment & Systems","children":[]},{"id":"35024","name":"Codes & Regulations - EB","children":[]},{"id":"35030","name":"Business Interruption of Machinery","children":[]},{"id":"35034","name":"Jurisdictional Inspections","children":[]},{"id":"35037","name":"Equipment Maintenance & Testing","children":[]},{"id":"35041","name":"Spoilage and Contamination","children":[]},{"id":"36663","name":"EB - Manufacturing","children":[]},{"id":"36667","name":"EB - Healthcare (Hospital)","children":[]},{"id":"36670","name":"EB - Manufacturing (Food)","children":[]},{"id":"36674","name":"EB - Technology (IT Software)","children":[]},{"id":"36675","name":"EB - Technology (Electronic Component & Hardware Manufacturing)","children":[]},{"id":"36676","name":"EB - Life Science","children":[]}]}


//   return (
//     <div>
// <TreeView
//   multiSelect

//   style={{marginTop:'15px',height:'100px',overflow:'auto'}}
//   defaultCollapseIcon={<ExpandMoreIcon />}
//   defaultExpanded={['root']}
//   defaultExpandIcon={<ChevronRightIcon />}
// >
//   {renderTree(treedata)}
// </TreeView>


//     </div>
//   )
// }

export default CardWidgetProperties
