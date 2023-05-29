import React, { useEffect, useState } from "react";
import logoWtext from '../assets/logo_w_text.png';
import sharedStorefront from '../assets/info/sharedStorefront.png';
import tt_team from '../assets/info/tt_team.png';
import logo from '../assets/logo.svg';
import world from '../assets/info/world.png';
import steps from '../assets/info/steps.png';


export default function Onboarding() {
  
  return (
    <div>
      <div className="bg-gradient-to-r from-teal-600 dark:from-teal-700 from-10% via-teal-600 dark:via-[#04406b] via-50% to-emerald-500 dark:to-emerald-800 to-90% duration-500">
        <div className="flex justify-center w-full p-8 pt-20">
        <img
          className="h-auto w-3/6 place-self-center"
          src={logoWtext}
          alt="Thrive Together"
        />
        </div>
      </div>
      <div className="pt-10">
        <div className="flex gap-8">
          <div>
            <h1 className="ml-8 text-3xl text-teal-600 dark:text-teal-400 font-bold">💚 Who We Are</h1>
            <div className="p-4 pl-8 mt-4 rounded-r-3xl bg-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-600 duration-500">
              <p className="text-lg text-emerald-800 dark:text-emerald-200">Collaborative and social platform for small business owners from underrepresented backgrounds. ✨</p>
            </div>
            <p className="mt-4 ml-8"><em>What does this mean?</em> It means we believe that there is a better way for small busineses (particularly from underrepresented groups) to </p>
          </div>
          <img
            className="w-3/6 h-3/6 mr-8"
            src={world}
            alt="illustration of the world's commerce!"
          />
        </div>
        <div className="mt-10">
          <div className="flex gap-4">
            <img
              className="w-auto h-64 ml-10 mt-8"
              src={steps}
              alt="Steps of using Thrive Together"
            />
            <div>
              <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400">💡How It Works</h1>
              <ol className="ml-10 mr-8 list-decimal">
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Sign up 🤸</li>
                  <p className="text-lg">Scroll below, sign up, and add information about your business(ease).</p>
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Find other small businesses 🏪</li>
                  <p className="text-lg">On the dashboard, view other small business groups to join, funding sources, and more.</p>
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Expand your audience 🛍️</li>
                  <p className="text-lg">Upon joining a collective, enjoy all of the powerful tools that come from working together!</p>
              </ol> 
            </div>
          
          </div>
        </div>
        <div className="mt-12 pt-12 pb-12 bg-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-600">
          <div className="flex justify-center flex-col">
              <h1 className="text-3xl text-center font-bold text-teal-600 dark:text-teal-400">✅ Sign Up Now!</h1>
              <p className="text-center mt-4">ryan put the oath stuff here</p>
          </div>
        </div>
        
      </div>
    </div>
  

  );
}