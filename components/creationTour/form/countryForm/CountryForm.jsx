import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {getCountryValue} from '@/store/slice/getFormValue'
import classes from './countryForm.module.css'

const CountryForm = () => {
  const dispatch = useDispatch();
  const countryValue = useSelector((state) => state.getFormValue.country);
  console.log(countryValue);
  return (
    <>
      <p className={classes.sub_title}>Ваша страна</p>
      <div className={classes.wrapper}>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
        <input
          onChange={e => dispatch(getCountryValue(e.target.value))}
          type="text"
          className={classes.input}
          placeholder="Ваша страна"
        />
      </div>
    </>
  );
};

export default CountryForm;
