import React, { useContext, useReducer,useEffect } from 'react';
import CartData from '../storage/data';
import reducer from './Reducer';
const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  loading: false,
  data: CartData,
  total: 0,
  amount: 0,
};

function ContextCart({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Clearcart = () => {
    dispatch({ type: 'ClearAll' });
  };
  const remove = (id) => {
    dispatch({ type: 'Remove', payload: id });
  };
  const Increase = (id) => {
    dispatch({ type: 'Increase', payload: id });
  };
  const decreases = (id) => {
    dispatch({ type: 'decreases', payload: id });
  };

 const Fetchdata=async()=>{
dispatch({type:"Loading"})
 const data=await fetch(url)
 const respdata=await data.json()
dispatch({type:"Responsed",payload:respdata})
  }
useEffect(() => {
  Fetchdata()
}, [])

useEffect(() => {
  console.log("dhjasjkd");
  dispatch({type:"GetTotal"})
}, [state.data])

  return (
    <AppContext.Provider
      value={{ ...state, Clearcart, remove, Increase, decreases }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { ContextCart, useGlobalContext };
