import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {getEmailValue} from '@/store/slice/getFormValue'
import classes from './emailForm.module.css'

const EmailForm = () => {
    const dispatch = useDispatch();
    const countryValue = useSelector((state) => state.getFormValue.email);
  return (
    <>
        <p className={classes.sub_title}>Email  <span>*</span></p>
        <div className={classes.wrapper}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input
          onChange={e => dispatch(getEmailValue(e.target.value))}
          type="text"
          className={classes.input}
          placeholder="Ваш Email"
        />
      </div>
      <p className={classes.b_text}>Пожалуйста, проверьте свой адрес электронной почты, чтобы мы могли с вами точно связаться.</p>
    </>
  )
}

export default EmailForm