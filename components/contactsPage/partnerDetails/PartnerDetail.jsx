import classes from "./partnerDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PartnerDetail = () => {
  return (
    <div className={classes.PartnerDetail}>
      <div className={classes.item}>
        <h3 className={classes.title}>Team Partner Care:</h3>
        <p>
          Турагенты, школы или организации, пожалуйста, обращайтесь к
          <span>Team Partner Care</span> по Email:
        </p>
        <button className={classes.btn}>
          <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
          <a href="mailto:travel@minzifatravel.com">travel@minzifatravel.com</a>
        </button>
      </div>
      <div className={classes.item}>
        <h3 className={classes.title}>Программа Маркетинга:</h3>
        <p>
          Пользователи, которые могут и заинтересованы в продвижении через их
          бизнес веб-сайт, пожалуйста, свяжитесь с
          <span>"Turi-Uzbekistana.ru"</span>
        </p>
        <button className={classes.btn}>
          <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
          <a href="mailto:timur.alimov@minzifatravel.com">
            timur.alimov@minzifatravel.com
          </a>
        </button>
      </div>
    </div>
  );
};

export default PartnerDetail;
