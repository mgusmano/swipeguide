import React, { useState, useEffect, useRef, useCallback } from 'react';
//import axios from "axios";
import './CardWidget.css'
import Card from'./Card'

//http://skillnetpartnerlocationsapi.azurewebsites.net//api/PartnerLocations?partnerid=395
//http://skillnetpartnerpositionsapi.azurewebsites.net//api/PartnerPositions?partnerid=395
//https://skillnetusersapi.azurewebsites.net/api/users

const CardWidget = (props) => {
  //title:Card Widget//title:
  //x:30//x:
  //y:30//y:
  //width:1000//width:
  //height:700//height:

  //const { PartnerID, PartnerName, PersonID, GroupID} = props.Partner;

  const cardRef = useRef(null);
  //const [originalusers, setOriginalUsers] = useState(null)
  const [users, setUsers] = useState(null)
  //const [filteredpositions, setFilteredpositions] = useState([])
  //const [filteredlocations, setFilteredlocations] = useState([])
  //var originalusers

  const [waiting, setWaiting] = useState(false)


  const onMessage = useCallback((e) => {
    if (!e.detail) {return}
    var type = e.detail.type
    var payload = e.detail.payload
    switch (type) {
      // case 'fromcard':
      //   onChange(payload.filters)
      //   break;

      case 'fromcard2':
        onChange2(payload.filters)
        break;

      case 'fromcardwaiting':
        //console.log('here')
        setWaiting(true)
        setUsers([])
        break;

      case 'fromcardfilteredusers':
        //console.log(payload.users)

        var toShow = []
        if (props.SMEOnly === true) {
          payload.users.map(user => {
            if (user.Leader === '' && user.SME === '') {

            }
            else {
              toShow.push(user)
            }
            return null
          })
          setUsers(toShow)
        }
        else {
          setUsers(payload.users)
        }
        setWaiting(false)
        break;


      default:
        break;
    }
  }, [])

  const filterArray = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        console.log(key)
        // ignores non-function predicates
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }


  const SendIt = (type, payload) => {
    window.dispatchEvent(new CustomEvent('mjg',{detail:{type:type,payload:payload}}));
  }

  const onChange2 = (filters) => {
    console.log(filters)
    console.log(filters.Skills)
    const filteredusers = filterArray(cardRef.current.originalusers, filters);
    setUsers(filteredusers)

    console.log(filteredusers)
    SendIt('filteredusers', filteredusers)

  }


  // const onChange = (filterdata) => {
  //   //https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
  //   // const filters = {}
  //   // if (filterdata.filteredpositions.length > 0) {
  //   //   filters.JobName = JobName => filterdata.filteredpositions.includes(JobName)
  //   // }
  //   // if (filterdata.filteredlocations.length > 0) {
  //   //   filters.Location = Location => filterdata.filteredlocations.includes(Location)
  //   // }
  //   // if (filterdata.filteredmanagers.length > 0) {
  //   //   filters.DirectManagerID = DirectManagerID => filterdata.filteredmanagers.includes(DirectManagerID)
  //   // }
  //   // if (filterdata.filteredfitpercent !== '') {
  //   //   filters.ManagerRating = ManagerRating => (ManagerRating >= filterdata.filteredfitpercent) ? true : false
  //   // }
  //   // if (filterdata.filteredsubjectmatterexperts.length > 0) {
  //   //   filters.sme = sme => filterdata.filteredsubjectmatterexperts.includes(sme)
  //   // }
  //   // const filtered = filterArray(cardRef.current.originalusers, filters);
  //   //setUsers(filtered)

  //   setUsers(filterdata.filteredusers)

  //   // SendIt('fromcardwidget', {
  //   //   filteredusers: filtered,
  //   //   filteredskills: filterdata.filteredskills,
  //   //   filteredpositions: filterdata.filteredpositions,
  //   //   filteredlocations: filterdata.filteredlocations,
  //   //   filteredmanagers: filterdata.filteredmanagers,
  //   //   filteredfitpercent: filterdata.filteredfitpercent,
  //   //   filteredsubjectmatterexperts: filterdata.filteredsubjectmatterexperts,
  //   // })
  // }



  useEffect(() => {
    console.log('useEffect CardWidget')
    const card = cardRef.current

    // const urlParams = new URLSearchParams(window.location.search);
    // const partnerid = parseInt(urlParams.get('partnerid'));
    // const partnername = urlParams.get('partnername');
    // console.log('partnerid',partnerid)
    // console.log('partnerid',Number.isInteger(partnerid))
    // if (Number.isInteger(partnerid)) {
    //   PartnerID = Number.isInteger(partnerid)
    //   PartnerName = partnername
    // }

    //var url = 'https://skillnetusersapi.azurewebsites.net/api/users?partnerid=' + PartnerID


    // //SendIt('fromcardwaiting', {})
    // setWaiting(true)
    // setUsers([])
    // var ratingsourcesstring = ''
    // var jobidsstring = ''
    // var locationidsstring = ''
    // var manageridsstring = ''
    // var percentidsstring = ''
    // var skillidsstring = ''
    // var url = 'https://skillnetusersapi.azurewebsites.net/api/cardreportusers?' +
    // 'personid=' + PersonID + '&' +
    // 'groupid=' + GroupID + '&' +
    // 'ratingsources=' + ratingsourcesstring + '&' +
    // 'jobids=' + jobidsstring  + '&' +
    // 'partnerlocationids=' + locationidsstring + '&' +
    // 'managerids=' + manageridsstring + '&' +
    // 'percentages=' + percentidsstring + '&' +
    // 'skillids=' + skillidsstring

    // //Users
    // axios
    // .get(url, {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   //console.log('users with Test',response.data)
    //   var Users = response.data.filter(user => {
    //     if (user.BLastName !== 'Test') {
    //       return user
    //     }
    //   })
    //   var Users2 = Users.map(function (user) {
    //     var f = user.BFirstName.charAt(0)
    //     switch (f) {
    //       case 'A':
    //         user.sme = 'Gold'
    //         break;
    //       case 'B':
    //         user.sme = 'Silver'
    //         break;
    //       case 'C':
    //         user.sme = 'Bronze'
    //         break;
    //       default:
    //         user.sme = ''
    //         break;
    //     }
    //     return user
    //   });
    //   console.log('users',Users2)
    //   setUsers(Users2)
    //   card.originalusers = Users2
    //   console.log(card.originalusers.length)
    //   setWaiting(false)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })


    // card.addEventListener('mjg', onMessage)
    // return () => {
    //   card.removeEventListener('mjg', onMessage)
    // }

    window.addEventListener('mjg', onMessage);
    return function cleanup() {
      window.removeEventListener('mjg', onMessage);
    };


  }, [onMessage]);



  // const onMessage2 = (e) => {
  //   if (!e.detail) {return}
  //   var type = e.detail.type
  //   var payload = e.detail.payload
  //   switch (type) {
  //     case 'fromcard':
  //       onChange(payload.filters)
  //       break;
  //   }
  // }




  // const filterIt = (name, filtersSelected, start) => {
  //   if (filtersSelected.length === 0) {
  //     return start
  //   }
  //   var filteredResult = start.filter(obj => {
  //     var found = false;
  //       for (var i = 0; i < filtersSelected.length; i++) {
  //         if (obj[name] === filtersSelected[i]) {
  //           found = true;
  //           break;
  //         }
  //       }
  //       return found
  //   })
  //   return filteredResult
  // };

  // const filterIt2 = (name, filtersSelected, start) => {
  //   if (filtersSelected.length === 0) {
  //     return start
  //   }
  //   var filteredResult = start.filter(obj => {
  //     var found = false;
  //       //for (var i = 0; i < filtersSelected.length; i++) {
  //         //console.log(obj[name])
  //         //console.log(filtersSelected)
  //         if (obj[name] >= filtersSelected) {
  //           //console.log('found')
  //           found = true;
  //           //break;
  //         }
  //         else {
  //           found = false;
  //         }
  //       //}
  //       return found
  //   })
  //   return filteredResult
  // };



  return (
        <div ref={cardRef} style={{display:'flex',flex:props.flex,flexWrap:'wrap',flexDirection:'row',overflow:'auto',alignContent:'flex-start'}} xstyle={{flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',display:'flex',overflow:'auto'}}>

          {waiting === true &&

                <div style={{padding:'30px',fontSize:'48px'}}>Loading...</div>

          }

          {users !== null &&
            users.map((user, index) => {
              return (
                <Card key={index} user={user} Partner={props.Partner} SMEOnly={props.SMEOnly}/>
              )
            })
          }
        </div>
  )

}

export default CardWidget


// <Vertical>
// <Horizontal style={{display:'flex',flex:'2',maxHeight:'100px'}}>
//   <div style={{height:'60px',padding:'10px'}}>filters here...</div>
// </Horizontal>
// <Splitter/>


// {/*

// <Horizontal>
// <div style={{display:'flex',flex:'auto',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between', overflow:'auto'}}>
  // {users !== null &&
  //   users.map((user) => {
  //     //var pic = `url(${user.Avatar})`
  //     console.log(user)
  //     return (
  //       <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'250px',height:'100px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

  //         <div style={{display:'flex',flexDirection:'row',alignContent:'flex-end',justifyContent:'space-between'}}>
  //           {/* <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: 'url(./fonts/5.jpg)'}}></div> */}
  //           <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>

  //           <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
  //             <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.JobName}</div>
  //             <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>CNA</div>
  //             <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Location}</div>
  //           </div>
  //         </div>


  //         <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
  //           <div style={{fontSize:'11px'}}>{user.Email}</div>
  //         </div>


  //         <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
  //           <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>Profile</div>
  //         </div>
  //       </div>
  //     )
  //   })
  // }
// </div>
// </Horizontal>

// </Vertical> */}
// )

//          renderer: v => <strong>{Number(parseFloat(v).toFixed(2)).toLocaleString('en')}</strong>},
