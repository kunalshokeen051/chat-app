import React from 'react'
import { useAuth } from '@/context/authContext'

const index = () => {
 const {signOut, currentUser, isLoading} = useAuth();
  
  return (
    <div className=''>
    <button>Sign Out</button>
    </div>
  )
}

export default index