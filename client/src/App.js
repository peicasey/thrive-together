import React from "react";
import { useState } from 'react';
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
 
// // CSS
// import 'output.css';
// import ThemeProvider from './components/ThemeProvider';
import ToggleTheme from './components/ToggleTheme';

import './index.css';

const App = ({ Component, pageProps }) => {

  // PRODUCTION SERVER: https://thrive-together.onrender.com" 
  // DEBUG SERVER:      http://localhost:5050
  const [s, setS] = useState('https://thrive-together.onrender.com');

  // dark/light mode
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.getElementById("root").add('dark')
  // } else {
  //   document.getElementById("root").remove('dark')
  // }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')

  {/* <ThemeProvider>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList server={s}/>} />
        <Route path="/edit/:id" element={<Edit server={s}/>} />
        <Route path="/create" element={<Create server={s}/>} />
      </Routes>
    </ThemeProvider> */}


  return (
    <div className="bg-white dark:bg-black">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="bg-white dark:bg-black">
        owo
      </div>
      <ToggleTheme />
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