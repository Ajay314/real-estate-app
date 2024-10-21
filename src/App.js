
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';

function App() {
  


  return (
    <BrowserRouter>

    <Routes>
       <Route path='/signup' element={<Signup />}></Route>
       <Route path='/login' element={<Login />}></Route>
      
    </Routes>
  </BrowserRouter>
  // <div>
  //   {/* <Signup /> */}
  //   <Login />
  // </div>
  
)

}

export default App;
