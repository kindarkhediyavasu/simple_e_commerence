import { useEffect, useState } from "react";
import Product from "./Product";
import style from "./Home.module.css";
import Spinner from "./Spinner";

function Home(){
    const [products,setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        }
        fetchData();
    },[])
    return <div className={style.container}>
        {products.length <= 0 && <Spinner/> }
        {products.map((product) => {
            return  <Product key={product.id} title={product.title} des={product. description} imageURL={product.thumbnail} price={product.price} rating={product.rating}/>
        })}
       
    </div>
}
export default Home;