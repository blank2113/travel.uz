import { useDispatch } from "react-redux";
import classes from "./filter.module.css";

const Filter = ({ data, value, fn }) => {
    const dispatch = useDispatch()
  return (
    <div className={classes.Filter}>
      {data.map((item) => (
        <div
          key={item.id}
          className={
            value === item.name
              ? `${classes.item} ${classes.active}`
              : `${classes.item}`
          }
          onClick={() => dispatch(fn(item.name))}
        >{item.name}</div>
      ))}
    </div>
  );
};

export default Filter;
