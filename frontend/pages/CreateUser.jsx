import React, { useState } from 'react'
import { addUser } from '../utils/HandleApi'
import {useNavigate} from 'react-router-dom'

const CreateUser = () =>{

    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[age,setAge] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        addUser({name,email,age})
        navigate('/home')
    };
    

    return (
        <div className ='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className = 'w-50 bg-white rounded p-4'>
                <form onSubmit = {Submit}>
                    <h2>Add User</h2>
                    <div className = 'mb-2'>
                        <label htmlFor="name">Name:</label>
                        <input id ='name' type = "text" placeholder='Enter Name' className = 'form-control'
                        onChange = {(e)=> setName(e.target.value)}/>
                    </div>

                    <div className = 'mb-2'>
                        <label htmlFor="email">Email:</label>
                        <input id ='email' type = "text" placeholder='Enter Email' className = 'form-control'
                        onChange = {(e)=> setEmail(e.target.value)}/>
                    </div>

                    <div className = 'mb-2'>
                        <label htmlFor="age">Age:</label>
                        <input id ='age' type = "text" placeholder='Enter Age' className = 'form-control'
                        onChange = {(e)=> setAge(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>

        </div> 
    )
}

export default CreateUser