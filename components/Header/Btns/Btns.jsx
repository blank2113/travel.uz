import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import classes from './btns.module.css'

const Btns = () => {
  return (
    <div className={classes.CallBtns}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a href="tel:+998901380013">
            <FontAwesomeIcon icon={faPhoneFlip} />
          </a>
        </li>
        <li className={classes.item}>
          <a href="https://">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Btns