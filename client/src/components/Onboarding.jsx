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
        <div className="flex justify-center w-full p-12 pt-20">
        <img
          className="h-auto w-3/6 place-self-center"
          src={logoWtext}
          alt="Thrive Together"
        />
        </div>
      </div>
      <div className="pt-10">
        <div>
          <div className="flex gap-20 justify-between items-center flex-col lg:flex-row">
            <div>
              <h1 className="ml-12 text-3xl text-teal-600 dark:text-teal-400 font-bold">💚 Who We Are</h1>
              <div className="p-4 pl-12 mt-8 mb-8 lg:rounded-r-3xl bg-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-600 duration-500">
                <p className="text-xl text-emerald-800 dark:text-emerald-200">Collaborative and social platform for small business owners from underrepresented backgrounds. ✨</p>
              </div>
              <p className="mt-4 ml-12 mr-12"><em>What does this mean? </em></p>
              <p className="mt-4 ml-12 mr-12">
                It means we believe that there is a better way for small-to-medium enterprises or SMEs (particularly 
                from underrepresented groups like those from Less Developed Countries (LDC), those that are women-owned, 
                indigenous-owned or LGBTQIA+ owned, and more) to combat their unique challenges and join the global market. 
              </p>
              <p className="mt-4 ml-12 mr-12"><em>How? </em></p>
              <p className="mt-4 ml-12 mr-12">
                By creating a platform where small businesses (selling similar products, of similar backgrounds, or in similar regions) 
                can combine resources to overcome common problems that SMEs face -- such as having working capital, ability to apply for 
                licenses, exposure, and more by working together. This also allows the communities surrounding these businesses to 
                grow stronger without relying on outside sources of assistance.
              </p>
            </div>
            <img
              className="w-auto h-64 mr-0 lg:mr-12"
              src={world}
              alt="illustration of the world's commerce!"
            />
          </div>

          <div className="m-12 text-lg border-l-4 border-emerald-400 pl-8">
            <p className="text-slate-500 dark:text-slate-300">
              <em>"Fifty-one percent of these vital businesses, however, require more funding than they can currently access. Credit constraints are a serious challenge for SMEs. 
              Without reliable sources of working capital, SMEs are unable to make investments needed for growth, leading to stagnation. Given the importance of SMEs as a source of employment, 
              barriers to accessing financing become barriers to poverty reduction and economic growth. 
              <strong className="text-teal-500 dark:text-teal-200"> Blended finance can help firms fill this critical gap.</strong></em>"
            </p>
            <p className="text-slate-400 dark:text-slate-500"><em>(Runde et al. 2021)</em></p>
          </div>
          
        </div>
        
        <div className="p-12 flex justify-center w-3/6 min-w-full hover:min-w-24 duration-500">
          <div className="flex gap-4">
            <img
              className="w-auto h-64 mt-12"
              src={steps}
              alt="Steps of using Thrive Together"
            />
            <div>
              <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400">💡 How It Works</h1>
              <ol className="ml-10 mr-12 list-decimal">
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Sign up 🤸</li>
                  <p className="text-lg">Scroll below, sign up, and add information about your business(es).</p>
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Find other small businesses 🏪</li>
                  <p className="text-lg">On the dashboard, view other small business groups to join, funding sources, and more.</p>
                <li className="font-bold mt-3 text-xl text-emerald-800 dark:text-emerald-200">Expand your audience 🛍️</li>
                  <p className="text-lg">Upon joining a collective, enjoy all of the powerful tools that come from working together!</p>
              </ol> 
            </div>
          
          </div>
        </div>

        <div className="p-12">
          <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400">🌟 Benefits</h1>
          <div class="flex items-start flex-col lg:flex-row gap-4 mt-4">
            <div className="flex justify-center flex-col w-full
                            bg-gradient-to-tr from-teal-600 dark:from-teal-700 from-10% via-teal-600 dark:via-[#04406b] via-50% to-emerald-500 dark:to-emerald-800 to-90% 
                            duration-500
                            p-4 rounded-2xl hover:rounded-3xl hover:p-8"
            >
              <h2 className="text-2xl font-bold text-teal-200">Collaboration</h2>
              <p className="text-teal-50">
                Share storefronts with other businesses to save costs on site hosting and
                have greater inventory. 
              </p>
            </div>
            <div className="flex justify-center flex-col w-full
                            bg-gradient-to-tr from-teal-600 dark:from-teal-700 from-10% via-teal-600 dark:via-[#04406b] via-50% to-emerald-500 dark:to-emerald-800 to-90% 
                            duration-500
                            p-4 rounded-2xl hover:rounded-3xl hover:p-8"
            >
              <h2 className="text-2xl font-bold text-teal-200">Finances</h2>
              <p className="text-teal-50">
                Share and receive financial help in order to get necessary licenses, equipment, and more.
              </p>
            </div>
            <div className="flex justify-center flex-col w-full
                            bg-gradient-to-tr from-teal-600 dark:from-teal-700 from-10% via-teal-600 dark:via-[#04406b] via-50% to-emerald-500 dark:to-emerald-800 to-90% 
                            duration-500
                            p-4 rounded-2xl hover:rounded-3xl hover:p-8"
            >
              <h2 className="text-2xl font-bold text-teal-200">Exposure</h2>
              <p className="text-teal-50">
                Easily promote and get promoted by other businesses to increase business via social media!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 pb-12 bg-slate-200 border-2 border-slate-300 dark:bg-slate-800 dark:border-slate-600">
          <div className="flex justify-center flex-col">
              <h1 className="text-3xl text-center font-bold text-teal-600 dark:text-teal-400">✅ Sign Up Now!</h1>
              <p className="text-center mt-4">ryan put the oath stuff here</p>
          </div>
        </div>
        
        <div className="p-12">
          <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400">👀 View Existing Businesses</h1>
          <p className="mr-12 mt-4">put business generation code</p>
        </div>
        

      </div>
    </div>
  

  );
}