import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//  Import _App.scss.
import './_App.scss'

/*==== Import AppStoreProvider HOC ====*/
import AppContextProvider from "./contexts/AppContextProvider";


/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import DashboardComp from "./components/pages/Dashboard_Comp/Dashboard_Comp";


function App() {
  return (
    <main className="App">
      <Router>
          <AppContextProvider>
              <Routes>
                  {/*=============================== Landing Page ==============================*/}
                  <Route path="/" element={ <Navigate replace to="/dashboard" /> } />
                  <Route path="/dashboard" element={ <DashboardComp /> } />
              </Routes>
          </AppContextProvider>
      </Router>

      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>*/}
    </main>
  )
}

export default App
