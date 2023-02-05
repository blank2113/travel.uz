import classes from "./dayForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addDaysValue, minusDaysValue } from "../../../../store/slice/form";


const DayForm = () => {
  const dayValue = useSelector((state) => state.form.daysForm);
  const dispatch = useDispatch();
  return (
    <>
      <p className={classes.sub_title}>Количество дней</p>
      <div className={classes.wrapper}>
        <button
          className={classes.decrement}
          onClick={() => dispatch(minusDaysValue())}
        >
          -
        </button>
        <span className={classes.digit}>{dayValue}</span>
        <button
          className={classes.increment}
          onClick={() => dispatch(addDaysValue())}
        >
          +
        </button>
      </div>
    </>
  );
};

export default DayForm;
