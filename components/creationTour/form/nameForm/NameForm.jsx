import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {getNameValue} from '@/store/slice/getFormValue'
import classes from './nameForm.module.css'

const NameForm = () => {
    const dispatch = useDispatch();
    const countryValue = useSelector((state) => state.getFormValue.name);
  return (
    <>
        <p className={classes.sub_title}>Ваше имя <span>*</span></p>
        <div className={classes.wrapper}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          onChange={e => dispatch(getNameValue(e.target.value))}
          type="text"
          className={classes.input}
          placeholder="Вашe имя"
        />
      </div>
    </>
  )
}

export default NameForm