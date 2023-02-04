import classes from "./list.module.css";
import { motion } from "framer-motion";

const List = ({ data, state }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, display: "none" }}
      animate={
        state
          ? { y: 0, opacity: 1, display: "block" }
          : { y: -100, opacity: 0, display: "none" }
      }
      exit={{ y: -100, opacity: 0, display: "none" }}
    >
      {data.map(item => (
        <ul className={classes.list} key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}
    </motion.div>
  );
};

export default List;