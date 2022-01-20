import React, { useState } from 'react';
import { useGlobalContext } from './ContextDrink';
import { Link,useParams } from "react-router-dom";
function CockTails() {
  const [More, setMore] = useState(false);
  const { CockTails,loading } = useGlobalContext();
  
  if(loading){
    console.log("loading");
    return <h2 className='spinner-border  text-primary loader'></h2>
  }
  if (CockTails.length<=0) {
    return <h2 className="text-secondary text-center m-3">No CockTails Items in your Search Value</h2>;
    
  }
  return (
    <article>
      <section>
        <div className="d-flex justify-content-around flex-wrap">
          {CockTails.map((item) => {
            return (
              <div key={item.id} className="card" style={{ width: '20rem' }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{item.drink}</h4>
                  <h5 className="card-text">{item.alholic}</h5>
                  <p className="card-text">
                    {More ? item.info : `${item.info.substring(0, 50)}..`}
                    <span onClick={() => setMore(!More)} style={{cursor:"pointer"}} className='text-primary d-flex fw-bloder'>
                      {More ? 'Show less' : `Show More`}
                    </span>
                  </p>

                  <Link to={`/CockTails/${item.id}`} className='btn btn-outline-dark w-100'>Details</Link>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}

const DrinkNavbar = () => {
  return (
    <header>
      <nav className="text-white bg-gradient bg-dark">
        <div className="d-flex align-items-center justify-content-around ">
          <h1>CockTails</h1>

          <ul className="list-unstyled d-flex mt-2 gap-1">
            <li>Home</li>
            <li>/</li>
            <li>Delivery</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const Form = () => {
  const { Search, url, loading, setSearch } = useGlobalContext();
  const SearchVal=React.useRef()
  const SearchCockTails=()=>{
      console.log(SearchVal.current.value);
      console.log(url);
      setSearch(SearchVal.current.value)
  }
    console.log(Search);

    return (
    <section>
      <form>
        <div
          className="d-grid gap-2 m-3 bg-white p-3 shadow-lg"
          style={{ placeContent: 'center' }}
        >
          <h2>Search your Favourite Drinks</h2>
          <input
          ref={SearchVal}
          onChange={SearchCockTails}
            type="text"
            className="form-control border border-3 text-dark border-secondary"
            placeholder="Enter a Your Drinks"
          
          />
        </div>
      </form>
    </section>
  );
};

export {CockTails,DrinkNavbar,Form};
