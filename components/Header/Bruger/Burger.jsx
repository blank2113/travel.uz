import classes from "./burger.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBurgerValues } from "@/store/slice/burgerSlice";

const Burger = () => {
  const status = useSelector((state) => state.burger.status);
  const dispatch = useDispatch();
  return (
    <div
      className={
        status ? `${classes.burger} ${classes.active}` : `${classes.burger}`
      }
      onClick={() => dispatch(getBurgerValues(true))}
    >
      <span />
    </div>
  );
};

export default Burger;
