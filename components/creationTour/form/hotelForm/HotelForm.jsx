import { useSelector, useDispatch } from "react-redux";
import { getHotelValue } from "../../../../store/slice/getFormValue";
import classes from "./hotelForm.module.css";

const HotelForm = () => {
  const dispatch = useDispatch();
  const hotelValue = useSelector((state) => state.getFormValue.hotel);
  const data = useSelector((state) => state.form.hotel);
  return (
    <>
      <p className={classes.sub_title}>Тип отеля</p>
      <ul className={classes.list}>
        {data.map((item, index) => (
          <li
            className={
              hotelValue === item
                ? `${classes.item} ${classes.active}`
                : `${classes.item}`
            }
            onClick={() => dispatch(getHotelValue(item))}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default HotelForm;
