"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'

const Home = () => {
    const users = useSelector((state) => state.users)
    // console.log(users);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        // alert(id)
        dispatch(deleteUser({id:id}))
    }
    return (
        <div>
            <div className='container'>
                <h1>Crud Operation</h1>
                <Link to="/create" className='btn btn-success'>Create</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                // console.log(user.id);
                                return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-secondary'>Edit</Link>
                                        <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-3'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
