import style from "./Header.module.css";
import { Link,NavLink} from "react-router-dom";
function Header(){
    return <header className={style.header_container}>
        <div className={style.logo}>
            <img src="./logo.png" alt="" />
        </div>
        <ul className={style.nav_links}>
            <li className={style.nav_link}><NavLink to="/" className={({isActive})=>isActive?style.active:undefined}>Home</NavLink></li>
            <li className={style.nav_link}><NavLink to="/about" className={({isActive})=>isActive?style.active:undefined}>about</NavLink></li>
            <li className={style.nav_link}><NavLink to="/contact" className={({isActive})=>isActive?style.active:undefined}>contact</NavLink></li>
            <li className={style.nav_link}><NavLink to="/login" className={({isActive})=>isActive?style.active:undefined}>login</NavLink></li>
        </ul>
    </header>
}
export default Header;