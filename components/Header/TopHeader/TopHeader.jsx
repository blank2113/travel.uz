import { useSelector } from "react-redux";
import classes from './topHeader.module.css'

const TopHeader = () => {
  const auth = useSelector((state) => state.authorization.auth);
  const currency = useSelector((state) => state.authorization.currency);
  return (
    <div className={classes.topHeader}>
      <div className={classes.inner}>
        {auth.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <select className={classes.select}>{currency.map((item, index )=> <option key={index}>{item}</option> )}</select>
      </div>
    </div>
  );
};

export default TopHeader;
