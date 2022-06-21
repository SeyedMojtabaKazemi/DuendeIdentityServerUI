import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeSecurityStamp } from '../../Store/reducers/userSlice'

export const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateSecurityStamp =() =>{
    dispatch(changeSecurityStamp())
  }

  return (
    <>
      <h1>Dashboard</h1>
      <button className='btn btn-info' onClick={() => {navigate('/CreateUser')}}>Create user</button>
      <button className='btn btn-danger' onClick={() => {updateSecurityStamp()}}>Change security stamp</button>
    </>
  )
}
