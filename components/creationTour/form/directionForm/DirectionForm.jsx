import { useSelector, useDispatch } from "react-redux";
import { getDirectionValue } from "@/store/slice/getFormValue";
import classes from "./directionForm.module.css";

const DirectionForm = () => {
  const dispatch = useDispatch();
  const directions = useSelector((state) => state.form.direction);
  const directionValue = useSelector((state) => state.getFormValue.directions);
  return (
    <>
      <p className={classes.sub_title}>Направления</p>
      <ul className={classes.list}>
        {directions.map((direction, index) => (
          <li
            className={
              directionValue === direction
                ? `${classes.item} ${classes.active}`
                : `${classes.item}`
            }
            key={index}
            onClick={() => dispatch(getDirectionValue(direction))}
          >
            {direction}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DirectionForm;
