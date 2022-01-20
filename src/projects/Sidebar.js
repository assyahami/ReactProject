import React, { useState } from 'react';
import {
  FaTimes,
  FaBars,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
function Sidebar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <div className="d-flex justify-content-start  m-5">
        <span
          id="bars"
          className="shadow-lg"
          onClick={() => setToggle(!Toggle)}
        >
          <FaBars></FaBars>
        </span>
      </div>
      <div className="">
        {Toggle ? <SideLink toggle={Toggle} setToggle={setToggle} /> : ''}
      </div>
    </>
  );
}
const SideLink = ({ toggle, setToggle }) => {
  console.log(toggle);
  // const [close,setClose]=useState(toggle)
  return (
    <div className={`sidiler ${toggle ? 'on' : 'sidiler off'}`}>
      <div className="d-flex justify-content-between align-items-center brand m-2">
        <h2>ReactSideBar</h2>
        <button
          onClick={() => setToggle(!toggle)}
          className="text-white btn  btn-sm"
          style={{ fontSize: '2rem' }}
        >
          <FaTimes />
        </button>
      </div>
      <div className="barlink">
        <ul className="list-unstyled m-5 pt-2">
          <li>Home</li>
          <li>Team</li>
          <li>Project</li>
          <li>Info</li>
        </ul>
      </div>
      <div className="d-flex gap-2 justify-content-center text-secoudary">
        <FaFacebook />
        <FaInstagram />
        <FaYoutube />
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Sidebar;
