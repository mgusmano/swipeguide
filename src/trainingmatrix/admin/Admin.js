import React, { useEffect } from 'react';
import { useMatrixState } from '../state/MatrixProvider';
import { styles } from '../styles';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'

const Admin = (props) => {
  const matrixState = useMatrixState();

  useEffect(() => {

  },[])

  async function signUp(username,password,email,phone_number) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                phone_number,   // optional - E.164 number convention
                // other custom attributes
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

  return (
    <div className='csv' style={{...styles.v,width:'100%',height:'100%',overflow:'none',background:'yellow'}}>
      <div>hi</div>
      <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            signUp('marcg1','marcg1password','mgusmano@yahoo.com','+013122222222')
          }}
        >
          Add User
        </button>
    </div>
  )
}

export default withAuthenticator(Admin)
