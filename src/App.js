
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
// import PropertyList from './Propertylist.js';
import AddProperty from './AddProperty.js';

function App() {
  


  return (
  //   <BrowserRouter>

  //   <Routes>
  //      <Route path='/signup' element={<Signup />}></Route>
  //      <Route path='/login' element={<Login />}></Route>
      
  //   </Routes>
  // </BrowserRouter>
  <div>
    {/* <Signup />
    <Login /> */}
    <AddProperty />
  </div>
  
)

}

export default App;
