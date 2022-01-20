import React, { useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import phonesvg from '../images/phone.svg';
import { useGlobalContext } from './context';
import Stripedata from '../storage/Stripedata';
//Navbar
function Stripe() {
  const { OpenMenuBar, CloseMenuBar, OpenModals } = useGlobalContext();
  // console.log(data);
  const Displaymenu = (e) => {
    const text = e.target.textContent;

    const tempbtn = e.target.getBoundingClientRect();
    const center = (tempbtn.left + tempbtn.right) / 2;
    const bottom = tempbtn.bottom - 3;
    OpenMenuBar(text, { center, bottom });
  };
  const hidemenu = (e) => {
    if (!e.target.classList.contains('btn-links')) {
      CloseMenuBar();
    }
  };
  return (
    <article>
      <nav
        className="reactnavbar   align-items-center bg-gradient"
        onMouseOver={hidemenu}
      >
        <div className="brand ">
          <div className="float-end">
            <button
              className="btn toggle text-white shadow-lg mb-5 border-4 rounded-circle"
              onClick={OpenModals}
            >
              <FaBars />
            </button>
          </div>
          <h2 className="text-white ">Stripe</h2>
        </div>
        <div className={`text-white menus `}>
          <div className="">
            <ul
              className={` align-items-center ml-3  link gap-5 list-unstyled`}
            >
              <li>
                <button className="btn btn-links " onMouseOver={Displaymenu}>
                  Products
                </button>
              </li>
              <li>
                <button className="btn btn-links" onMouseOver={Displaymenu}>
                  Developers
                </button>
              </li>
              <li>
                <button className="btn btn-links" onMouseOver={Displaymenu}>
                  Company
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </article>
  );
}

//Hero Section
const Hero = () => {
  const { CloseMenuBar } = useGlobalContext();
  const hidemenu = () => {
    CloseMenuBar();
    console.log('5345');
  };
  return (
    <article id="hero" onMouseOver={hidemenu}>
      <section className="intro">
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of businesses of all sizes—from startups to large
          enterprises—use Stripe’s software and APIs to accept payments, send
          payouts, and manage their businesses online.
        </p>
        <button className="btn btn-dark">Learn more</button>
      </section>
      <section>
        <article className="IMGS">
          <img src={phonesvg} alt="Phnoeimg" className="" />
        </article>
      </section>
    </article>
  );
};

//SubMenu
const SubMenu = () => {
  const { OpenModals, OpenModal, CloseModals } = useGlobalContext();

  return (
    <aside className={`${OpenModal ? ' menu-container' : ' hide'}`}>
      <article>
        <button
          className="btn btn-close fw-bolder float-end m-2"
          onClick={CloseModals}
        ></button>
        <div className="menu shadow-lg">
          {Stripedata.map((link, index) => {
            return (
              <div className="" key={index}>
                <h2 className="p-3">{link.page}</h2>
                <div className="d-flex m-2 flex-wrap flex-column gap-4">
                  {link.links.map((links) => {
                    return (
                      <span id="labels" className="d-flex gap-2">
                        <span className="text-success">{links.icon}</span>{' '}
                        {links.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </aside>
  );
};

const Menu = () => {
  const {
    Openmenu,
    Location,
    links: { page, links },
  } = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = Location;
    submenu.style.left = `${center}px`;
    submenu.style.bottom = `${bottom}px`;
  }, [Location]);
  return (
    <aside
      ref={container}
      className={`${Openmenu ? ' show' : 'Menubars'} M- shadow Menubars w-auto`}
    >
      <h4 className="mb-2 text-secondary">{page}</h4>
      <div>
        <ul className="list-unstyled gap-4 d-flex flex-wrap w-auto">
          {links.map((item, index) => {
            return (
              <li key={index}>
                {item.icon} {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export { Stripe, Hero, SubMenu, Menu };
