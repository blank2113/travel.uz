import classes from "./calendarForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from "react-redux";
import { getCalendarValue } from "../../../../store/slice/form";
import SwitchBtn from "@/components/UI/switchBtn/SwitchBtn";

const CalendarForm = () => {
  const dispatch = useDispatch();
  const calendarValue = useSelector((state) => state.form.calendar);
  console.log(calendarValue);
  return (
    <>
      <p className={classes.sub_title}>Дата прибытия</p>
      <div className={classes.wrapper}>
        <div className={classes.calendar}>
          <DatePicker
            selected={calendarValue}
            onChange={(date) => dispatch(getCalendarValue(date))}
            className={classes.input}
          />
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>
        <SwitchBtn/>
        <p className={classes.text}>Гибкие даты?</p>
      </div>
    </>
  );
};

export default CalendarForm;
