import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";
function Footer(){
    return <footer className={style.footer_contaner}>
        <div className={style.social_links_box}>
            <div  className={style.social_link}><a href="https://www.instagram.com/vasu_kindarkhediya"><FaInstagram/></a></div>
            <div  className={style.social_link}><a href=""><FaWhatsapp/></a></div>
            <div  className={style.social_link}><a href=""><FaLinkedin/></a></div>
        </div>
        <div  className={style.copyrgiht_box}>
            <div className={style.copyrgiht_info}>
                Copyright <span>&copy;</span> 2026-vkshoop all rights reserved
            </div>
        </div>
    </footer>
}
export default Footer;