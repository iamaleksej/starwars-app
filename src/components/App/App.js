import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import PeoplePage from '../pages/PeoplePage'
import ErrorPage from '../pages/ErrorPage'
import './App.sass';
import Layout from "../Layout";


const App = () => {

   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />} />
               <Route path="/people/*" element={<PeoplePage />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/not-found" element={<ErrorPage />} />
         </Routes>
      </>
   )

}

export default App;