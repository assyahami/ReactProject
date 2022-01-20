import React,{useState,useEffect} from 'react'
import FoodData from '../storage/FoodData';
let listcategories = new Set(FoodData.map((food) => food.category));
const categories=["all",...listcategories]
const categoriestabs=["new",...listcategories]


function FoodMenu() {
    const [Foods, setFoods] = useState(FoodData)
    const [Category, setCategory] = useState(categories)
    console.log(Category);
    const filtercategories=(category)=>{
        if (category=="all") {
            setFoods(FoodData)
            return;
        }
        const newItem=FoodData.filter((item)=>item.category===category)
        return setFoods(newItem)
    }
    console.log(Foods);
    return (
        <div>
            <CategoryBtn btns={Category} filter={filtercategories}/>
           <div className="cards">
            {Foods.map((food)=>{
             let {img,desc,price,title}=food
             
             return(
             <>
             <div key={food.id} className="card shadow  mb-5 bg-body rounded" style={{width:"20rem"}}>
               <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <span className='fw-bolder text-danger ms-auto me-auto'>${price}</span><br /><br />
                <a href="#" className="btn btn-primary d-block">Buy Now</a>
            </div>
        </div>
    
        </>
        )
    })
};
</div>
</div>
    )
}

const CategoryBtn = ({ btns, filter }) => {
  console.log(btns);
  return (
    <div className="d-flex justify-content-around" style={{ rowGap: '4rem' }}>
      {btns.map((item, index) => {
    
        return (
          <button className="btn btn-outline-danger mt-4 fw-bolder" key={index} onClick={()=>filter(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
const Tabs=()=>{
   const [Foods, setFoods] = useState([])  
   const [Value, setValue] = useState(0)
    const [Category, setCategory] = useState(categoriestabs)
    let {desc,price,title,img}=Foods
   useEffect(() => {
     setFoods(FoodData[Value])
   }, [Foods,Value])
console.log(Foods);
  return (
    <>
      <div className="d-flex tabs">
        {Category.map((item, index) => {
          return (
            <button
              className={`btn btn-outline-danger mt-4 fw-bolder ${
                index === Value ? 'btn-dark text-white' : 'btn-outline-danger'
              }`}
              key={index}
              onClick={() => {
                setValue(index);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="d-flex m-md-4 justify-content-start">
        <div
          className="card  tabs d-flex justify-content-center"
          style={{
            backgroundImage: `url(${img})`,
            objectFit: 'cover',
            width: '25rem',
          }}
        >
          <div className="card-body bg-ligth bg-opacity-10 ads">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
            <a href="#" class="btn btn-primary d-block">
              Read MORE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export {FoodMenu,Tabs}
