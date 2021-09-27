import React from 'react';
import { useBenchmarkState } from './state/BenchmarkProvider';
//import axios from "axios";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/InfoOutlined';
import Zoom from '@material-ui/core/Zoom';
import Select from "react-select";

import { Grid, Typography } from "@material-ui/core";

//import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import classes from "./uploadCSV";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const BenchmarkProperties = (props) => {
  const benchmarkState = useBenchmarkState();
  const { PartnerName } = props.Partner
  const state = benchmarkState
  // const {
  //    classes,
  // //   //state,
  // //   //skillSelectChangeHandler,
  // //   //selectChangeHandler,
  // //   //userSelectChangeHandler,
  // //   //handleRadioChange,
  // //   //userMultiSelectChangeHandler,
  // //   //skillMultiSelectChangeHandler
  // } = props;

  const selectChangeHandler = (e, name) => {
    console.log(name)
    var filterObj = benchmarkState.filterObj;
    console.log(filterObj)
    console.log(filterObj[name])
    console.log(e)
    filterObj[name] = Array.isArray(e)
      ? e.map((data) => data.value)
      : e.value;

      console.log(filterObj)
      console.log(filterObj[name])

    // this.setState({ filterObj });
  };

  const skillSelectChangeHandler = (selectedOption, fieldName) => {
    let filterObjClone = JSON.parse(JSON.stringify(this.state.filterObj));
    let skillDataClone = JSON.parse(JSON.stringify(this.state.skillDataClone));
    let skillData = JSON.parse(JSON.stringify(this.state.skillData));
    let isUpdateSkillClone = false;

    if (fieldName === 'is_core') {
      if (selectedOption) {
        skillDataClone = skillDataClone.filter(skill => skill.is_core === selectedOption.value);
        filterObjClone.is_core = selectedOption.value;
      } else {
        filterObjClone[fieldName] = '';
        isUpdateSkillClone = true
      }
    } else {
      if (selectedOption.length > filterObjClone[fieldName].length) {
        let selectedOptionValArr = filterObjClone[fieldName];

        if (selectedOption.length > 1) {
          let filteredSkillData = null;
          selectedOptionValArr.push(selectedOption[selectedOption.length - 1].value);
          filteredSkillData = skillData.filter(user => (user[fieldName] === selectedOption[selectedOption.length - 1].value));
          skillDataClone = skillDataClone.concat(filteredSkillData);
        } else {
          skillDataClone = skillDataClone.filter(skill => (skill[fieldName] === selectedOption[0].value));
          selectedOptionValArr.push(selectedOption[0].value);
        }
      } else {
        let selectedOptionValArr = [];

        for (let index = 0; index < selectedOption.length; index++) {
          selectedOptionValArr.push(selectedOption[index].value)
        }

        filterObjClone[fieldName] = selectedOptionValArr;
        isUpdateSkillClone = true;
      }
    }
    this.setState({ skillDataClone, filterObj: filterObjClone }, this.setSkillFilterDataUpdate.bind(this, fieldName, isUpdateSkillClone));
  }



  const userSelectChangeHandler = (selectedOption, fieldName) => {
    let filterObjClone = JSON.parse(JSON.stringify(this.state.filterObj));
    let userDataClone = JSON.parse(JSON.stringify(this.state.userDataClone));
    let userData = JSON.parse(JSON.stringify(this.state.userData));
    let isUpdateUserClone = false;

    if (fieldName === 'is_eb') {
      if (selectedOption) {
        let newUserData = [...userDataClone];
        if (filterObjClone.manager_name.length === 0 && filterObjClone.position_id.length === 0 && filterObjClone.geo_location.length === 0) {
          newUserData = [...userData];
        }
        userDataClone = newUserData.filter(user => user.is_eb === selectedOption.value);
        filterObjClone.is_eb = selectedOption.value;
      } else {
        filterObjClone[fieldName] = '';
        isUpdateUserClone = true;
      }
    } else {
      if (selectedOption.length > filterObjClone[fieldName].length) {
        // in case of addition.
        let selectedOptionValArr = filterObjClone[fieldName];

        if (selectedOption.length > 1) {
          let filteredUserData = null;
          selectedOptionValArr.push(selectedOption[selectedOption.length - 1].value);
          if (fieldName !== 'position_id') {
            filteredUserData = userData.filter(user => (user[fieldName] === selectedOption[selectedOption.length - 1].label));
          } else {
            filteredUserData = userData.filter(user => (user[fieldName] === selectedOption[selectedOption.length - 1].value));
          }
          userDataClone = userDataClone.concat(filteredUserData);
        } else {
          if (fieldName !== 'position_id') {
            userDataClone = userDataClone.filter(user => (user[fieldName] === selectedOption[0].label));
            selectedOptionValArr.push(selectedOption[0].value);
          } else {
            userDataClone = userDataClone.filter(user => (user[fieldName] === selectedOption[0].value));
            selectedOptionValArr.push(selectedOption[0].value);
          }
        }

        filterObjClone[fieldName] = selectedOptionValArr;
      } else {
        // in case of removal.
        let selectedOptionValArr = [];

        for (let index = 0; index < selectedOption.length; index++) {
          selectedOptionValArr.push(selectedOption[index].value)
        }

        filterObjClone[fieldName] = selectedOptionValArr;
        isUpdateUserClone = true;
      }
    }
    this.setState({ userDataClone, filterObj: filterObjClone }, this.setUserFilterDataUpdate.bind(this, fieldName, isUpdateUserClone));
  }

  const handleRadioChange = (event) => {
    let { filterObj, options, userData, userDataClone,
      //skillData,skillDataClone,
      coreOptionData, ebOptionData } = this.state;
    let name = event.target.name;
    console.log(name)
    filterObj[name] = event.target.value;
    let obj = this.clearSelectedFilterOnRadio(filterObj, name, options);
    filterObj = { ...obj };
    if (name === "isUser") {
      userDataClone = [...userData]
      options.ebOption = [...ebOptionData]
    } else if (name === 'isSkill') {
      //skillDataClone = [...skillData]
      options.coreOption = [...coreOptionData];
      options.filterSkillOptions = [...options.skillOption]
    }
    this.setState({ filterObj, userDataClone }, () => {
      if (name === "isUser") {
        this.setUniqueOptions()
      } else if (name === 'isSkill') {
        this.setSkillFilterData()
      }
    });
  };

  const userMultiSelectChangeHandler = (selectedOption) => {
    let userDataClone = JSON.parse(JSON.stringify(this.state.userData));
    let filterObjClone = JSON.parse(JSON.stringify(this.state.filterObj));

    let result = [];
    let selectedOptionValArr = [];

    for (let index = 0; index < selectedOption.length; index++) {
      selectedOptionValArr.push(selectedOption[index].value)
    }
    filterObjClone.userIds = selectedOptionValArr;

    for (let index = 0; index < userDataClone.length; index++) {
      if (selectedOptionValArr.indexOf(userDataClone[index].user_id) > -1) {
        result.push(userDataClone[index]);
      }
    }

    this.setState({ userDataClone: result, filterObj: filterObjClone });
  }

  const skillMultiSelectChangeHandler = (selectedOption) => {

    let skillDataClone = JSON.parse(JSON.stringify(this.state.skillData));
    let filterObjClone = JSON.parse(JSON.stringify(this.state.filterObj));

    let result = [];
    let selectedOptionValArr = [];

    for (let index = 0; index < selectedOption.length; index++) {
      selectedOptionValArr.push(selectedOption[index].value)
    }
    filterObjClone.skillIds = selectedOptionValArr;

    for (let index = 0; index < skillDataClone.length; index++) {
      if (selectedOptionValArr.indexOf(skillDataClone[index].skill_id) > -1) {
        result.push(skillDataClone[index]);
      }
    }

    this.setState({ skillDataClone: result, filterObj: filterObjClone });
  }

  const {
    filterObj,
    labelEBPC,
    labelFunction,
    labelSubFunction,
    labelPosition,
    labelSegment,
    labelFunctionGroup,
    labelLine,
    labelCompetency,
    options,
  } = state;

  let {
    //jobBandOption,
    segmentOption,
    subFunctionOption,
    functionOption,
    managerOption,
    locationOption,
    positionOption,
    segementOption,
    lineOption,
    competencyOption,
    userOption,
    skillOption,
    sourceOption,
    //coreOption,
    ebOption,
    filterSkillOptions,
    filterUserOptions,
    //outputOption,
    //themeOption
  } = options;
//console.log(sourceOption)

return (
<React.Fragment>
  <div style={{height:'55px',background:'lightgray',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'24px'}}>FILTERS</div>

  <Accordion defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelFirstExpanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.Panelheading}>Assessment Filter</Typography>
            <Tooltip placement="top" TransitionComponent={Zoom} title="This selection allows you to chose between assessments completed by a manager vs self assessments">
              <Info className={classes.toolTipIcon} />
            </Tooltip>
          </AccordionSummary>
          <AccordionDetails className={classes.filterPanelContent} style={{display:'flex',flexDirection:'column'}}>

          {sourceOption !== null &&
            <Autocomplete

              onChange={(e) => selectChangeHandler(e, "rating")}
              style={{width:'100%',marginTop:'20px'}}

              disableCloseOnSelect={true}
              options={sourceOption}
              //getOptionLabel={(position) => position.JobName}
              getOptionLabel={sourceOptionItem => typeof sourceOptionItem === 'string' ? sourceOptionItem : sourceOptionItem.label}
              //defaultValue=''
              renderOption={(sourceOptionItem, { selected }) => (

                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {sourceOptionItem.label}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Assessment Source"
                  placeholder=""
                />
              )}
            />
          }
          </AccordionDetails>
        </Accordion>
  <Accordion defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelExpanded }}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography color="primary" className={classes.Panelheading}>User Filter</Typography>
    </AccordionSummary>

    <AccordionDetails className={classes.filterPanelContent}>
      <Grid container >
        <Grid className={classes.radioGroup} item sm={12} md={12} lg={12}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="isUser"
              value={filterObj.isUser}
            >
              <Grid container spacing={3}>
                <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                  <FormControlLabel
                    className={classes.radioBtnLabel}
                    value="filters"
                    control={<Radio color="primary" />}
                    label="Filters"
                    onChange={handleRadioChange}
                  />
                  <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Filters" button will enable data at the Line, Manager, Position and Location level'>
                    <Info className={classes.toolTipIcon} />
                  </Tooltip>
                </Grid>
                <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                  <FormControlLabel
                    className={classes.radioBtnLabel}
                    value="user"
                    control={<Radio color="primary" />}
                    label="Users"
                    onChange={handleRadioChange}
                  />
                  <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Users" radio button will enable data at the individual level only'>
                    <Info className={classes.toolTipIcon} />
                  </Tooltip>
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid hidden={true} item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>{labelEBPC}</Typography>
          <Select
            name="is_eb"
            value={filterObj.is_eb}
            onChange={(e) => userSelectChangeHandler(e, "is_eb")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={ebOption}
            placeholder={`Select ${labelEBPC}...`}
            clearable
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>

        {/* jobBandOption,
segmentOption,
subFunctionOption,
functionOption, */}

{PartnerName === 'General Mills' &&

<>
        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>{labelFunction}</Typography>
          <Select
            name="function"
            multi={true}
            value={filterObj.function}
            onChange={(e) => userSelectChangeHandler(e, "function")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={functionOption}
            placeholder={`Select Function...`}
            clearable
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>




        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>{labelSubFunction}</Typography>
          <Select
            name="sub_function"
            multi={true}
            value={filterObj.sub_function}
            onChange={(e) => userSelectChangeHandler(e, "sub_function")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={subFunctionOption}
            placeholder={`Select Sub-Function...`}
            clearable
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>



        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>Segment</Typography>
          <Select
            name="segment"
            multi={true}
            value={filterObj.segment}
            onChange={(e) => userSelectChangeHandler(e, "segment")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={segmentOption}
            placeholder={`Select ${labelSegment}...`}
            clearable
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>
        </>

}

        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>
            Manager
          </Typography>
          <Select
            name="manager_name"
            multi={true}
            value={filterObj.manager_name}
            onChange={(e) => userSelectChangeHandler(e, "manager_name")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={managerOption}
            placeholder="Select Manager..."
            clearable={false}
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>
        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>
            {labelPosition}
          </Typography>
          <Select
            name="position_id"
            multi={true}
            value={filterObj.position_id}
            onChange={(e) => userSelectChangeHandler(e, "position_id")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={positionOption}
            placeholder={`Select ${labelPosition}...`}
            clearable={false}
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>

        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>
            Location
          </Typography>
          <Select
            name="geo_location"
            multi={true}
            value={filterObj.geo_location}
            onChange={(e) => userSelectChangeHandler(e, "geo_location")}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={locationOption}
            placeholder="Select Location..."
            clearable={false}
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>


        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>
            Filtered Users
          </Typography>
          <Select
            name="filterUser"
            value={filterObj.filterUser}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            removeSelected
            options={filterUserOptions}
            placeholder="Filtered Users List..."
            clearable={false}
            disabled={filterObj.isUser === "user" ? true : false}
          />
        </Grid>

        <Grid item sm={12} md={12} lg={12}>
          <Typography className={classes.slctBoxLabel}>User</Typography>
          <Select
            multi={true}
            name="userIds"
            value={filterObj.userIds}
            defaultValue=""
            onChange={userMultiSelectChangeHandler}
            className="search-select"
            optionalClassName="form-select-option"
            searchable
            options={[...userOption]}
            placeholder="User List"
            clearable={false}
            disabled={filterObj.isUser === "filters" ? true : false}
          />
        </Grid>
      </Grid>
    </AccordionDetails>
  </Accordion>
  <Accordion defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelExpanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography color="primary" className={classes.Panelheading}>Skill Filter</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.filterPanelContent}>
            <Grid container>

              <Grid className={classes.radioGroup} item sm={12} md={12} lg={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="isSkill"
                    value={filterObj.isSkill}
                  >
                    <Grid container spacing={3}>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="filters"
                          control={
                            <Radio
                              color="primary"
                              onChange={handleRadioChange}
                            />
                          }
                          label="Filters"
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Filters" radio button will enable data at the Line, Segment, and Competency level'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="skill"
                          control={
                            <Radio
                              color="primary"
                              onChange={handleRadioChange}
                            />
                          }
                          label="Skills"
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Skills" button will enable data at the skill level only'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={12} md={12} lg={12}>

                {/* <Typography className={classes.slctBoxLabel}>
                  Core/Segment
                </Typography>
                <Select
                  name="is_core"
                  value={filterObj.is_core}
                  onChange={(e) => this.skillSelectChangeHandler(e, "is_core")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={coreOption}
                  placeholder="Select Core/Segment..."
                  clearable
                  disabled={filterObj.isSkill === "skill" ? true : false}
                /> */}

              </Grid>

              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  {labelFunctionGroup}
                </Typography>
                <Select
                  name="segement"
                  multi={true}
                  value={filterObj.segement}
                  onChange={(e) => skillSelectChangeHandler(e, "segement")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={segementOption}
                  placeholder={`Select ${labelFunctionGroup}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>{labelLine}</Typography>
                <Select
                  name="line"
                  multi={true}
                  value={filterObj.line}
                  onChange={(e) => skillSelectChangeHandler(e, "line")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={lineOption}
                  placeholder={`Select ${labelLine}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
                <Grid item sm={12} md={12} lg={12} />
              </Grid>
              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                {labelCompetency}
                </Typography>
                <Select
                  name="competency"
                  multi={true}
                  value={filterObj.competency}
                  onChange={(e) => skillSelectChangeHandler(e, "competency")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={competencyOption}
                  placeholder={`Select ${labelCompetency}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid className={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  Filtered Skill
                </Typography>
                <Select
                  name="filterSkill"
                  value={filterObj.filterSkill}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={filterSkillOptions}
                  placeholder="Filtered Skill List..."
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid className={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>Skill</Typography>
                <Select
                  multi={true}
                  name="skillIds"
                  value={filterObj.skillIds}
                  defaultValue=""
                  onChange={skillMultiSelectChangeHandler}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  options={[...skillOption]}
                  placeholder="Select Skills..."
                  clearable={false}
                  disabled={filterObj.isSkill === "filters" ? true : false}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

</React.Fragment>
)

}

export default BenchmarkProperties