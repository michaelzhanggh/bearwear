import './App.css';
import Categories from './Categories'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './Portal'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import closet from './closet.jpg'

 
function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  return (
    <div className="min-h-screen bg-closet bg-cover">
    <Router>
      <Navbar />
      <Routes>
      {!user && (
          <><Route path='/' element={<Portal />} /><Route path='/SignIn' element={<SignIn />} /><Route path='/SignUp' element={<SignUp />} /></>
        )}
        {user && (
          <><Route path='/' element={<Home />} /><Route path='/Outer' element={<Categories name="Outer" />} /><Route path='/Tops' element={<Categories name="Tops" />} /><Route path='/Bottoms' element={<Categories name="Bottoms" />} /><Route path='/Accessories' element={<Categories name="Accessories" />} /><Route path='/Dresses' element={<Categories name="Dresses" />} /><Route path='/Shoes' element={<Categories name="Shoes" />} /></>
        )}
      </Routes>
    </Router>
    </div>
 );
}
 
export default App;
