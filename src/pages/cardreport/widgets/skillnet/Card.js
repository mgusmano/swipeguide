import React, { useState, useEffect } from 'react'

import Star from '@material-ui/icons/Star';
import ProfileDialog from './ProfileDialog'
//import Button from '@material-ui/core/Button';


const Card = (props) => {
  const {user, Partner, SMEOnly, showratings} = props
  const {PartnerName,ratingsources} = Partner
  const [addWidgetOpen, setAddWidgetOpen] = useState(false);
  const [color, setColor] = useState('gold')
  const [display, setDisplay] = useState('none')
  const [ratinglabel, setRatinglabel] = useState('')

  if (user.Avatar === "https://azureportal.skillnet.net/") {
    user.Avatar = 'Icons/a.png'
  }



  // if (PartnerName === 'General Mills') {
  //   user.Rating = user.SelfRating
  // }
  // else {
  //   user.Rating = user.ManagerRating
  // }

  const handleAddWidgetClose = (values) => {
    setAddWidgetOpen(false);
  };

  useEffect(() => {
    //console.log('x' + user.location + 'x')
    if (user.SME === undefined) {
      user.SME = ''
    }
    if (user.Leader === undefined) {
      user.Leader = ''
    }
    if (user.Segment === undefined) {
      user.Segment = ''
    }
    if (user.Function === undefined) {
      user.Function = ''
    }
    if (user.Subfunction === undefined) {
      user.Subfunction = ''
    }

    if (ratingsources === '1000') {
      user.Rating = user.SelfRating
      setRatinglabel('Self Rating')
    }
    else {
      user.Rating = user.ManagerRating
      setRatinglabel('Manager Rating')
    }

    //console.log('useEffect Card')

    // if (user.Avatar === "https://azureportal.skillnet.net/") {
    //   user.Avatar = 'a.png'
    // }

    // if (PartnerName == 'General Mills') {
    //   user.Rating = user.SelfRating
    //   console.log(user.Rating)
    // }
    // else {
    //   user.Rating = user.ManagerRating
    // }

    if (PartnerName === 'CNA') {
      var f = user.sme
      switch (f) {
        case 'Gold':
          setColor('#FFD700')
          setDisplay('block')
          break;
        case 'Silver':
          setColor('#C0C0C0')
          setDisplay('block')
          break;
        case 'Bronze':
          setColor('#cd7f32')
          setDisplay('block')
          break;
        default:
          setColor('white')
          setDisplay('block')
          break;
      }
    }
    //console.log(user.BFirstName.charAt(0))
  }, []);
  //  }, [user.Avatar, user.BFirstName]);

  let show = false;
  let idshow;
  if (show) {
    idshow = <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>ID: {user.PersonID} - ManagerID: {user.DirectManagerID}</div>
  } else {
    idshow = <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;</div>
  }

  var SMEs = user.SME.split(",");
  var all = SMEs.map((SME,index) => {
    return <div key={index} >SME: {SME}</div>
  })



  return (
    <div key={user.PersonID} style={{display:'flex',flexDirection:'column',margin:'10px 10px 10px 10px',padding:'10px',width:'300px',xheight:'150px',border:'1px solid lightgray',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}}>

    <div style={{display:'flex',flexDirection:'row',alignContent:'flex-start',justifyContent:'space-between'}}>
    <div style={{display:'flex',alignItems:'flex-start',}}>
      <Star style={{color:color,display:display}}/>
      <div>
        <div className="imgAll imgBig" style={{height:'70px',width:'70px',backgroundImage: `url(${user.Avatar})`}}></div>
        <div style={{display:'flex',alignContent:'center',justifyContent:'center',width:'100%',fontSize:'11px'}}>
          <div style={{borderBottom:'1px solid gray',marginTop:'1px',cursor:'pointer'}} onClick={() => setAddWidgetOpen(true)}>Profile</div>
        </div>
        <ProfileDialog open={addWidgetOpen} onClose={handleAddWidgetClose} PersonId={user.PersonID} />
      </div>
    </div>
      <div style={{display:'flex',flexDirection:'column',alignContent:'flex-end'}}>
        <div style={{fontSize:'11px',fontWeight:'bold',marginTop:'1px',textAlign:'right'}}>{user.BFirstName} {user.BLastName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;{user.JobName}</div>
        <div style={{fontSize:'11px',marginTop:'10px',textAlign:'right'}}></div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>&nbsp;{PartnerName}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.location !== undefined && <div>Locationx: {user.Location}</div>}</div>

{SMEOnly === true &&
        <>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Leader !== '' && <div>Leader: {user.Leader}</div>}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.SME !== '' && <div>{all}</div>}</div>
        </>
}

        {PartnerName === 'General Mills' &&
        <>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Segment !== '' && <div>Segment: {user.Segment}</div>}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Function !== '' && <div>Function: {user.Function}</div>}</div>
        <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{user.Subfunction !== '' && <div>SubFunction: {user.Subfunction}</div>}</div>
        </>
        }



      </div>

    </div>

    <div style={{marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
      <div style={{fontSize:'11px',marginTop:'1px',textAlign:'left'}}></div>
    </div>

    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <div style={{fontSize:'11px'}}>{user.Email}</div>
      {idshow}
{showratings === true &&
      <div style={{fontSize:'11px',marginTop:'1px',textAlign:'right'}}>{ratinglabel}: {user.Rating}</div>
}
      </div>

  </div>

  )
}

export default Card