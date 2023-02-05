import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { getPhoneValue } from "@/store/slice/getFormValue";
import classes from "./telForm.module.css";

const TelForm = () => {
  const dispatch = useDispatch();
  const countryValue = useSelector((state) => state.getFormValue.phone);
  return (
    <>
      <p className={classes.sub_title}>
        Номер телефона, WhatsApp или любой другой быстрый способ связаться с
        вами <span>*</span>
      </p>
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <input
          onChange={(e) => dispatch(getPhoneValue(e.target.value))}
          type="text"
          className={classes.input}
          placeholder="Ваш телефон"
        />
      </div>
      <p>
        Мы позвоним Вам только с вашего разрешения и только касательно вашего
        запроса
      </p>
    </>
  );
};

export default TelForm;
