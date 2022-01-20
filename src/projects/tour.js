import React, { useState, useEffect } from 'react';
import useFetch from '../Custom/useFetch';
let url = 'https://course-api.com/react-tours-project';
function TourApp() {
  const { data, loading } = useFetch(url);
          if(loading){
          return   <h2 className="spinner-border text-primary"></h2> 
          }
  return (
    <>
      <h2>Tour App</h2>
      <div className="cards">
        {data.map((item) => {
          return (
            <>
              <MapItems key={item.id} loader={loading} datas={item} />
            </>
          );
        })}
      </div>
    </>
  );
}

const MapItems = ({ datas }) => {
  const [More, setMore] = useState(false);
  const { data, loading } = useFetch(url);

  return (
    <>
      <div className="card">
        <img src={datas.image} alt="" className="img-fluid" />
        <br />
        <br />
        <h5 className="text-center">{datas.name}</h5>
        <p>
          {More ? datas.info : `${datas.info.substring(0, 210)}`}{' '}
          <span className="text-danger fw-bold" onClick={() => setMore(!More)}>
            {More ? 'show less' : 'show more'}
          </span>
        </p>
        <button className="btn btn-outline-info  fw-bolder">
          Start Plan{datas.price}
        </button>
      </div>
    </>
  );
};

export default TourApp;
