import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
function SingleDrink() {
   const {id}=useParams()
     const [loading, setLoading] = useState(false);
     const [CockTails, setCockTails] = useState([]);
  const FetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(`${url}${id}`);
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
          const ingreduent=[
              item.strIngredient1,
              item.strIngredient2,
              item.strIngredient3,
              item.strIngredient4,
              item.strIngredient5,
              item.strIngredient6,
              item.strIngredient7,
              item.strIngredient8,
          ]
          return {
            id: idDrink,
            drink: strDrink,
            info: strInstructions,
            category: strCategory,
            img: strDrinkThumb,
            Int:ingreduent
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
  }

  useEffect(() => {
    FetchData();
    console.log('hello');
  }, []);

   if (loading) {
     console.log('loading');
     return <h2 className="spinner-border  text-primary loader"></h2>;
   }
   return (
     <section className='d-flex justify-content-center'>
       {CockTails.map((item) => {
         return (
           <div key={item.id} className="m-3" style={{ width: '20rem' }}>
             <img src={item.img} className="card-img-top " alt="..." />
             <div className="card-body">
               <h2 className="card-title text-center p-1">Drink: {item.drink}</h2>
               <h5 className="card-text text-center">
                 Category: {item.category}
               </h5>
               <p className="card-text p-1">
               Instructions: {item.info}
               </p>
               <h5 className="card-text p-2">Ingredients: {item.Int}</h5>

               <Link
                 to={`/CockTails`}
                 className="btn btn-outline-dark w-100"
               >
                 Back to Home
               </Link>
             </div>
           </div>
         );
       })}
     </section>
   );
}

export default SingleDrink
