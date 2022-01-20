import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Books } from '../storage/reviewBook';
import {FaAdjust,FaArrowLeft,FaArrowRight} from 'react-icons/fa';
function Review() {
  const [Data, setData] = useState(Books);
  const [Index, setIndex] = useState(0);
  let {id, name,  img, title, rating, author } = Data[Index];
  const ServiceFunc=(number)=>{
if (number>Data.length-1) {
    return 0
}if (number<0) {
    return Data.length-1
}
console.log(Data.length-1);
return number
  }
  const nextBtn=()=>{
      setIndex(()=>{
          let plus=Index+1;
          return ServiceFunc(plus)
      })
  }
  
  const prevBtn=()=>{
      setIndex(()=>{
          let minus=Index-1;
          return ServiceFunc(minus)
      })
  }
  
  const Random=()=>{
      setIndex(()=>{
          let random=Math.floor(Math.random()*Data.length)
          if (random===Index) {
              random=Index+1
          }
          console.log(random);
          return ServiceFunc(random)
      })
  }
  
  return (
    <div>
      <div
        key={id}
        className="card shadow-lg ms-auto me-auto bg-white p-3 mt-5 bg-body rounded "
        style={{ width: '20rem' }}
      >
        <div className="card-body">
          <img src={img} alt="" className="ms-auto me-auto" />
          <h5 className="card-title">{name}</h5>
          <h4>{title}</h4>
          <h4>{author}</h4>
          <br />
          <button href="#" className="btn btn-success">
            Buy Now
          </button>
        </div>
        <div className="d-flex justify-content-around">
          <button className="btn" onClick={prevBtn}>
            <FaArrowLeft />
          </button>
          <button
            className="btn btn-outline-primary fw-bolder"
            onClick={Random}
          >
            Random
          </button>
          <button className="btn" onClick={nextBtn}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
