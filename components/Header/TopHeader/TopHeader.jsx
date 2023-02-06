import { useSelector, useDispatch } from "react-redux";
import classes from './topHeader.module.css'
import {getAutoValue, getRegistrValue} from '@/store/slice/auth'

const TopHeader = () => {
  const currency = useSelector((state) => state.authorization.currency);
  const auto = useSelector(state => state.auth.auto)
  const reg = useSelector(state => state.auth.registr)
  const dispatch = useDispatch()
  return (
    <div className={classes.topHeader}>
      <div className={classes.inner}>
        <div onClick={()=> dispatch(getAutoValue(true))}>Авторизация</div>
        <div onClick={()=> dispatch(getRegistrValue(true))}>Регистрация</div>
        <select className={classes.select}>{currency.map((item, index )=> <option key={index}>{item}</option> )}</select>
      </div>
    </div>
  );
};

export default TopHeader;
