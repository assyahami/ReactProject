import React, { memo } from 'react'
import {BrowserRouter,Router,Route,Routes} from 'react-router-dom'
import Navbar from '../Custom/Navbar';
import Error from '../Custom/Error';
import { FirstApp,SecoundApp,ThridApp,FourthApp,FifthApp,SixthAPP} from '../App'
import SingleDrink from '../projects/SingleDrink' 
function RounteApp() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstApp />}></Route>
          <Route path="/p2" element={<SecoundApp />}></Route>
          <Route path="/p3" element={<ThridApp />}></Route>
          <Route path="/stripe" element={<FourthApp />}></Route>
          <Route path="/ShoppingCart" element={<FifthApp />}></Route>
          <Route path="/CockTails" element={<SixthAPP />}></Route>
          <Route path="/CockTails/:id" element={<SingleDrink />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default RounteApp