import React from "react";
import { useState } from 'react';
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

// pages
import Onboarding from "./components/Onboarding";
import Dashboard from "./components/Dashboard";
import Groups from "./components/Groups";
import Explore from "./components/Explore";


import './index.css';

const App = ({ Component, pageProps }) => {

  // PRODUCTION SERVER: https://thrive-together.onrender.com" 
  // DEBUG SERVER:      http://localhost:5050
  const [s, setS] = useState('https://thrive-together.onrender.com');

  return (
    <div className="bg-slate-50 text-black dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Onboarding />} />
        <Route exact path="/recordlist" element={<RecordList server={s}/>} />
        <Route path="/edit/:id" element={<Edit server={s}/>} />
        <Route path="/create" element={<Create server={s}/>} />
        <Route exact path="/dashboard" element={<Dashboard server={s}/>} />
        <Route exact path="/groups" element={<Groups server={s}/>} />
        <Route exact path="/explore" element={<Explore server={s}/>} />
      </Routes>
    </div>
  );
};
 
export default App;