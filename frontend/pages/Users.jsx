import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { delUser, getUsers } from '../utils/HandleApi'

const Users = () =>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers(setUsers)
    },[])

    return (
        <div className = "d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className = "w-50 bg-white rounded p-4">
                <h2>Student Table</h2>
                <Link to = "/create" className = 'btn btn-success'>Add +</Link>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users.map((user) =>{
                                return (<tr key = {user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to = "/update" className = 'btn btn-success'>Edit</Link>
                                        <button className ="btn btn-danger" onClick={() =>{delUser(user._id,setUsers)}}>Delete</button>
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users