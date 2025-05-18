import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetatail = () => {

  const {userId} = useParams()
  
  //<Route path=':userId' element={<UserDetatail/>}/>


  return (
    <div>Detail about user {userId}</div>
  )
}

export default UserDetatail