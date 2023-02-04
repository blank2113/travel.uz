import Image from "next/image";
import classes from "./footerNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faVk,
  faOdnoklassniki,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import visa from "../../../public/visa.svg";
import master from "../../../public/mastercard.svg";
import payoner from "../../../public/payoneer.svg";
import paypal from "../../../public/paypal.svg";
import mir from "../../../public/mir.svg";
import karona from "../../../public/korona.svg";
import { useSelector } from "react-redux";

const FooterNews = () => {
  const img = [visa, master, payoner, paypal, mir, karona];
  const socialMedia = useSelector((state) => state.socialMedia.value);
  return (
    <div className={classes.FooterNews}>
      <div className={classes.item}>
        <p className={classes.title}>Новости и акции, только для своих:</p>
        <div className={classes.item_input}>
          <div className={classes.input_wrapper}>
            <input type="email" placeholder="Email" className={classes.input} />
          </div>
          <button className={classes.btn}>Подписаться</button>
        </div>
        <div className={classes.item_checkbox}>
          <input type="checkbox" />
          <p className={classes.sub_title}>
            Согласен на обработку персональных данных
          </p>
        </div>
      </div>
      <div className={classes.item}>
        <p className={classes.title}>Мы принимаем к оплате:</p>
        <div className={classes.list}>
          {img.map((img, index) => (
            <Image src={img} key={index} width={67.44} height={44.04} />
          ))}
        </div>
      </div>
      <div className={classes.item}>
        <p className={classes.title}>Мы в социальных сетях:</p>
        <ul className={classes.list}>
          {socialMedia.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                <FontAwesomeIcon
                  icon={
                    item.id === 1
                      ? faFacebook
                      : item.id === 2
                      ? faTwitter
                      : item.id === 3
                      ? faInstagram
                      : item.id === 4
                      ? faVk
                      : item.id === 5
                      ? faOdnoklassniki
                      : item.id === 6
                      ? faPinterest
                      : faYoutube
                  }
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.item}>
        <p>Все цены на туры указаны в USD $ Карта сайта</p>
      </div>
    </div>
  );
};

export default FooterNews;
