import classes from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import Btns from "../Btns/Btns";
import { useSelector, useDispatch } from "react-redux";
import { getCountryStatus } from "../../../store/slice/countryStatus";
import { getTourStatus } from "../../../store/slice/tourStatus";
import {getBurgerValues} from '@/store/slice/burgerSlice'
import List from "../List/List";
import Link from "next/link";

const Nav = () => {
  const status = useSelector((state) => state.burger.status);
  const countryStatus = useSelector((state) => state.countryStatus.value);
  const tourStatus = useSelector((state) => state.tourStatus.value);
  const dispatch = useDispatch();
  //   const {data: countries=[]}= useGetCountryValuesQuery()
  // const {data: tours=[]}= useGetToursValuesQuery()

  return (
    <div
      className={
        status ? `${classes.nav} ${classes.active}` : `${classes.nav} `
      }
    >
      <div className={classes.blur} />
      <div className={classes.list}>
      <div className={classes.exit}>
        <FontAwesomeIcon  icon={faXmark} onClick={()=> dispatch(getBurgerValues(false))}/>
      </div>
        <p
          onMouseOver={() => dispatch(getCountryStatus(true))}
          onMouseLeave={() => dispatch(getCountryStatus(false))}
          className={classes.item}
        >
          Страны
          <FontAwesomeIcon
            icon={faChevronDown}
            className={
              countryStatus
                ? `${classes.icon} ${classes.active}`
                : `${classes.icon}`
            }
          />
        </p>
        {/* <List data={countries} state={countryStatus}/> */}
        <p
          className={classes.item}
          onMouseOver={() => dispatch(getTourStatus(true))}
          onMouseLeave={() => dispatch(getTourStatus(false))}
        >
          Туры
          <FontAwesomeIcon
            icon={faChevronDown}
            className={
              tourStatus
                ? `${classes.icon2} ${classes.active}`
                : `${classes.icon2}`
            }
          />
        </p>
        {/* <List data={tours} state={tourStatus}/> */}
        <Link href={"/create_my_trip"}>
          <p className={classes.item}>Создать свой тур</p>
        </Link>
        <Link href={"/review"}>
          <p className={classes.item}>Отзывы</p>
        </Link>
        <Link href={"/about"}>
          <p className={classes.item}>О нас</p>
        </Link>
        <div className={classes.btns}>
          <Btns />
        </div>
      </div>
    </div>
  );
};

export default Nav;
