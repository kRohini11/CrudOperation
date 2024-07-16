import React, { useState } from 'react'
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users);
    const navigate = useNavigate()

    const handleSubmit = (eve) => {
        eve.preventDefault();
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 justify-content-center align-items-center'>
            <div className='w-50 p-5 bg-secondary text-white'>
                <h1>Add New User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <b><label>Name:</label></b>
                        <input type='text' className='form-control' onChange={e =>setName(e.target.value)} />
                    </div>
                    <div>
                        <p><b><label>Email:</label></b></p>
                        <input type='email' className='form-control' onChange={e =>setEmail(e.target.value )} />
                    </div><br />
                    <button className='btn btn-success'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Create
