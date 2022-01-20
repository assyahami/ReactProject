import React, { useReducer, useState } from 'react';
import { FaShoppingCart, FaArrowRight, FaArrowLeft ,FaMoneyBillWave} from 'react-icons/fa';
import { useGlobalContext } from './ContextCart';
function Navbar() {
  const { amount ,loading} = useGlobalContext();
console.log(loading);
  return (
    <div className="d-flex bg-info text-white fw-bold justify-content-between p-md-3 align-items-center">
      <h2>ShoppingCart</h2>
      <span className="m-3" style={{ fontSize: '2rem' }}>
        <FaShoppingCart />
        <span
          style={{ fontSize: '1.5rem', position: 'absolute' }}
          className="rounded-circle"
        >
          {amount}
        </span>
      </span>
    </div>
  );
}

function ShopCart() {
  const { data, Clearcart, remove, Increase, decreases, amount } =
    useGlobalContext();
      const { loading } = useGlobalContext();
      console.log(loading);
      if (loading) {
        return <h1 className="spinner-border text-info text-center loader"></h1>;
      }
  if (data.length == 0) {
    return <h2>Empty Item in your bag</h2>;
  }
  console.log(amount);
  return (
    <>
      <section className="w-75 border-5 border-dark border-bottom">
        {data.map((item, index) => {
          const { id } = item;
          return (
            <div key={index} className="">
              <div className="gridsystem" >
                <img src={item.img} alt="Phoneimg" className="w-50" />
                <div className="d-grid gap-2">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                  <span
                    className="me-auto text-danger"
                    onClick={() => remove(item.id)}
                  >
                    Remove
                  </span>
                </div>
                <div className="d-flex gap-2 align-items-center" style={{ placeContent: 'center' }}>
                  <button
                    className="btn border-0"
                    onClick={() => decreases(id)}
                  >
                    <FaArrowLeft />
                  </button>
                  <span id="quantity">{item.amount}</span>
                  <button className="btn " onClick={() => Increase(id)}>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <Total />
      <button
        onClick={Clearcart}
        className="btn btn-outline-primary text-center d-block w-50 fw-bolder ms-md-5 mt-4 me-auto "
      >
        Clear Cart
      </button>
    </>
  );
}

const Total = () => {
  const { total } = useGlobalContext();

  return (
    <div className="d-grid m-4" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <h2>Total</h2>
      <h2>${total}</h2>
      <h2>
        {total > 15099.73 ? `congrats you win coupon` : ''}
      </h2>
    </div>
  );
};

export { ShopCart, Navbar };
