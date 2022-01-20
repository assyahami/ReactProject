import React, { useContext, useState, useEffect } from 'react';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = React.createContext();

const ContextDrink = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [CockTails, setCockTails] = useState([]);
  const [Search, setSearch] = useState('a');
  const FetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(`${url}${Search}`);
      const respdata = await data.json();
      console.log(respdata);
      if (respdata.drinks) {
        const MyDrinks = respdata.drinks.map((item) => {
          const {
            idDrink,
            strInstructions,
            strDrink,
            strCategory,
            strDrinkThumb,
          } = item;
          return {
            id: idDrink,
            drink: strDrink,
            info: strInstructions,
            category: strCategory,
            img: strDrinkThumb,
          };
        });
        setCockTails(MyDrinks);
      } else {
        setCockTails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
  }, [Search]);
  return (
    <AppProvider.Provider value={{ CockTails, url,loading, setSearch, Search }}>
      {children}
    </AppProvider.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppProvider);
};

export { ContextDrink, useGlobalContext };
