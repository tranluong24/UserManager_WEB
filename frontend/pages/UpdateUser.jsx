import React from 'react'

const UpdateUser = ()=>{
    return (
        <div className ='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className = 'w-50 bg-white rounded p-4'>
            <form>
                <h2>Update User</h2>
                <div className = 'mb-2'>
                    <label htmlFor="name">Name:</label>
                    <input id ='name' type = "text" placeholder='Enter Name' className = 'form-control'/>
                </div>

                <div className = 'mb-2'>
                    <label htmlFor="email">Email:</label>
                    <input id ='email' type = "text" placeholder='Enter Email' className = 'form-control'/>
                </div>

                <div className = 'mb-2'>
                    <label htmlFor="age">Age:</label>
                    <input id ='age' type = "text" placeholder='Enter Age' className = 'form-control'/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>

    </div> 
    )
}

export default UpdateUser