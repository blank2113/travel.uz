import Link from "next/link";
import classes from "./bakcWardBtnIn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const BackWardBtnIn = ({ prevTitle, title }) => {
  return (
    <div className={classes.BackWardBtnIn}>
      <Link href={"/"}>
        <p>Главная</p>
      </Link>
      <FontAwesomeIcon icon={faChevronRight} className={classes.icon} />
      <Link href={`/${prevTitle}`}>
        <p>{prevTitle ? "Страны": null}</p>
      </Link>
      <FontAwesomeIcon icon={faChevronRight} className={classes.icon} />
      <p>{title}</p>
    </div>
  );
};

export default BackWardBtnIn;
