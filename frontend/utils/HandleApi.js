import axios from 'axios'

const baseUrlApi = "http://localhost:3001"

const getUsers = (setUsers) =>{
    axios
    .get(`${baseUrlApi}/get`)
    .then((result) => {
        setUsers(result.data)
    })
    .catch ((err)=>console.log(err))
}

const addUser = (user) =>{
    axios
    .post(`${baseUrlApi}/add`,user)
    .then((result) => {})
    .catch ((err)=>console.log(err))
}

const delUser = (userID,setUsers) =>{
    axios
    .post(`${baseUrlApi}/del`,{_id:userID})
    .then(() => {
        getUsers(setUsers)
    })
    .catch ((err)=>console.log(err))
}

export {addUser,getUsers,delUser}



