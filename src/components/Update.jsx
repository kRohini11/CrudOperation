
'use client'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'

const Update = () => {
    const users = useSelector((state) => state.users)
    const { id } = useParams()
    const existingUser = users.filter(f => f.id == id)
    const { name, email } = existingUser[0]
    const [uname, setUname] = useState(name)
    const [uemail, setUemail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (eve) => {
        // alert(eve)
        eve.preventDefault();
        dispatch(updateUser({id, name:uname, email:uemail}))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 justify-content-center align-items-center'>
            <div className='w-50 p-5 bg-secondary text-white'>
                <h1>Update User</h1>
                <form onSubmit={handleUpdate}>
                    <div>
                        <b><label>Name:</label></b>
                        <input type='text' className='form-control' value={uname} onChange={e => setUname(e.target.value)} />
                    </div>
                    <div>
                        <p><b><label>Email:</label></b></p>
                        <input type='email' className='form-control' value={uemail} onChange={e => setUemail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-success'>Update</button>
                </form>

            </div>
        </div>
    )
}

export default Update
