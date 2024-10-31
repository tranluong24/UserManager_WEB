import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from '../pages/Users'
import CreateUser from '../pages/Createuser'
import UpdateUser from '../pages/UpdateUser'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/home' element = {<Users/>}></Route>
          <Route path ='/create' element = {<CreateUser/>}></Route>
          <Route path ='/update' element = {<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
