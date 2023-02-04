import classes from "./backWardBtn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const BackWardBtn = ({ title }) => {
  return (
    <Link href={"/"} className={classes.BackWardBtn}>
      <p>Главная</p>
      <FontAwesomeIcon icon={faChevronRight} className={classes.icon} />
      <p>{title}</p>
    </Link>
  );
};

export default BackWardBtn;
