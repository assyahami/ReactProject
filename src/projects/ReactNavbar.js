import React,{useRef,useEffect,useState} from 'react'
import {FaBars} from 'react-icons/fa'
function ReactNavbar() {
    const [Click, setClick] = useState(true)
    return (
      <nav className="bg-dark reactnavbar  align-items-center bg-gradient">
        <div className="brand ">
          <div className="float-end">
            <button className="btn text-info" onClick={() => setClick(!Click)}>
              <FaBars />
            </button>
          </div>
          <h2 className="text-info">React Navbar</h2>
        </div>
        <div className={`text-info ${Click ? 'hide' : 'links'}`}>
          <ul className={`gap-4  align-items-center mt-3  link list-unstyled`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Company</li>
            <li>info</li>
          </ul>
        </div>
      </nav>
    );
}

export default ReactNavbar
