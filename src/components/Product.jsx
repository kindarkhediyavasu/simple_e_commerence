import style from "./Product.module.css";
function Product({title,des,imageURL,price,rating}){
    return <div className={style.product_container}>
        <div className={style.product_image}><img src={imageURL} alt="" loading="lazy" /></div>
        <div className={style.product_title}>{title.split(" ")[0]}</div>
        <div className={style.product_description}>{des.slice(0,50)}...</div>
        <div className={style.price_and_ration_wrapper}>
            <div className={style.product_price}>₹{price}</div>
            <div className={style.product_rating}>{rating}</div>
        </div>
        <div className={style.button_wrapper}>
        <button className={style.add_cart_button}>Add to cart</button>
        <button className={style.buy_button}>Buy</button>
        </div>
        
    </div>
}
export default Product;