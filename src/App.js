import logo from './logo.svg';
import './App.css';
import { FaShoppingBag } from 'react-icons/fa';

import TourAPP from './projects/tour';
import Review from './projects/review';
import { FoodMenu, Tabs } from './projects/menu';
import ColorPicker from './projects/ColorPicker';
import Grocery from './projects/Grocery';
import ReactNavbar from './projects/ReactNavbar';
import Sidebar from './projects/Sidebar';
import { Stripe, Hero, SubMenu, Menu } from './projects/Stripe';
import { Context } from './projects/context';
import { ContextDrink } from './projects/ContextDrink';
import { ContextCart, useGlobalContext } from './projects/ContextCart';
import { ShopCart, Navbar } from './projects/ShopCart';
import { CockTails, DrinkNavbar,   Form } from './projects/cockTails';
function FirstApp() {
  return (
    <section className="App">
      <TourAPP></TourAPP>
      <div className="head">
        <h2>Buy a Books</h2>
      </div>
      <Review />
    </section>
  );
}

function SecoundApp() {
  return (
    <article>
      <h1 className="text-center">Menu bar</h1>
      <FoodMenu />
      <h2 className="text-start ms-5 border-bottom-4">Tabs</h2>
      <Tabs />
      <section className="m-3 p-2">
        <h1 className="text-center">Color Picker</h1>

        <ColorPicker />
      </section>
    </article>
  );
}

function ThridApp() {
  return (
    <>
      <section>
        <h1 className="text-center mt-md-5">Grocery App</h1>

        <Sidebar />
        <Grocery />
      </section>
      <section>
        <h1 className="text-center">Navbar</h1>
        <div className="">
          <ReactNavbar />
        </div>
      </section>
    </>
  );
}

function FourthApp() {
  return (
    <main id="special">
      <Context>
        <Stripe />
        <Menu />
        <SubMenu />
        <Hero />
      </Context>
    </main>
  );
}

function FifthApp() {
  return (
    <main>
      <ContextCart>
        <nav>
          <Navbar />
        </nav>
        <article>
          <h2 className="text-center">
            Your Bag <FaShoppingBag></FaShoppingBag>
          </h2>
          <ShopCart />
        </article>
      </ContextCart>
    </main>
  );
}

function SixthAPP() {
  return (
    <main>
      <ContextDrink>
        <DrinkNavbar />
        <Form/>
        <CockTails />
      </ContextDrink>
    </main>
  );
}

export { FirstApp, SecoundApp, ThridApp, FourthApp, FifthApp, SixthAPP };
