import classes from "./contactDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
  faUser,
  faCircleUser,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className={classes.ContactDetails}>
      <h2 className={classes.title}>Контактные данные:</h2>
      <ul className={classes.list}>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faPhone} />
          <p>
            <span>Телефон:{" "}</span>
            <a href="https://wa.me/998936591107">+998936591107 (Whatsapp)</a>
          </p>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
          <p>
          <span>Email:{" "}</span>
            <a href="mailto:travel@minzifatravel.com">
              travel@minzifatravel.com;
            </a>
          </p>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faClock} />
          <p>
            <span>Часы работы онлайн-консультанта:</span> 24/7
          </p>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faClock} />
          <p>
            <span> Часы работы офиса:</span> с 10:00 до 18:00 (Выходные дни:
            воскресенье)
          </p>
        </li>
        <li>
          <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />
          <p>
            <span>Адрес:</span> ул. Эшони Пир 70, Бухара 200118, Узбекистан.
            "Unique Travel" FE by Minzifa Travel.
          </p>
        </li>
      </ul>
      <div className={classes.btn}>
        <button className={classes.reply}>
          <Link href={"/create_my_trip"}>
            <FontAwesomeIcon className={classes.icon} icon={faCircleUser} />
            Отправить заявку на подбор тура
          </Link>
        </button>
        <button className={classes.message}>
          <Link href={"/"}>
            <FontAwesomeIcon className={classes.icon} icon={faCircleQuestion} />
            Задать вопрос
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
