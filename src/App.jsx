import { Route, Routes, useLocation } from "react-router-dom"
import { useState } from "react"
//MUI
import { Grid, Typography } from "@mui/material"
//components
import AboutFrom from "./pages/AboutFrom"
import AddressForm from "./pages/AddressForm"
import RelationForm from "./pages/RelationForm"
import ChildrenForm from "./pages/ChildrenForm"
import BalloonForm from "./components/balloon/BalloonForm"
import UsersSteps from "./utility/UsersSteps"
import PropertyForm from "./pages/PropertyForm"



function App() {

  const location = useLocation()
  const pathname = location.pathname 
  // console.log(pathname);
  
  return (
    <>
    {/* <AboutFrom/> */}
      {/* <UserSteps path={pathname}/> */}
      <UsersSteps />
      {/* <PropertyForm/> */}
      {/* <ChildrenForm/> */}
      {/* <RelationForm/> */}
      {/* <AddressForm/> */}
      {/* <Routes> */}
        {/* <Route index element={<BalloonForm/>}/> */}
        {/* <Route path="aboutform" element={<AboutFrom/>}/>
        <Route path="addressform" element={<AddressForm/>}/>
        <Route path="relationform" element={<RelationForm/>}/>
        <Route path="childrenform" element={<ChildrenForm/>}/>
        <Route path="balloonform" element={<SignUp/>}/> */}
      {/* </Routes> */}
    </>
  )
}

export default App
