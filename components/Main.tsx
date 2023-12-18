import { SetStateAction, useEffect, useState } from "react";
import axios from "../node_modules/axios/index";
import "../style/style.css"
import Item from "./Items";
const Main: React.FC = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res)=>{setProducts(res.data);
      console.log(res.data)})
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    
    <div className="container">
    {products.length !== 0 && 
    products.map((product)=>{
        return (<>
        <Item products={product}/>
        </>)
    })
    }
    </div>
    
    </>
  )
  
};

export default Main