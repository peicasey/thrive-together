import React from "react";
import { useState } from 'react';
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
const App = () => {

  // PRODUCTION SERVER: https://thrive-together.onrender.com" 
  // DEBUG SERVER:      http://localhost:5050
  const [s, setS] = useState('https://thrive-together.onrender.com');


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList server={s}/>} />
        <Route path="/edit/:id" element={<Edit server={s}/>} />
        <Route path="/create" element={<Create server={s}/>} />
      </Routes>
    </div>
  );
};
 
export default App;