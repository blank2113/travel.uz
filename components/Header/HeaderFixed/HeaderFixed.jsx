import Nav from "../Nav/Nav";
import Image from "next/image";
import classes from "./headerFixed.module.css";
import logo from "../../../public/logo-horizontal.svg";
import Btns from "../Btns/Btns";
import Link from "next/link";
import Burger from "../Bruger/Burger";
import { getScrollAction } from "@/store/slice/scroll";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CountryMenu from "../countryMenu/CountryMenu";
import TourMenu from "../tourMenu/TourMenu";

const HeaderFixed = () => {
  const scroll = useSelector(state => state.scroll.value)
    const dispatch = useDispatch()
  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
      dispatch(getScrollAction(window.scrollY));
    };
  return (
    <div className={ scroll> 30 ? `${classes.HeaderFixed} ${classes.active}`: `${classes.HeaderFixed}`}>
      <div className={classes.logo}>
        <Link href={"/"}>
          <Image src={logo} width={179.02} height={35} alt="logo"/>
        </Link>
      </div>
      <Nav />
      <CountryMenu/>
      <TourMenu/>
      <div className={classes.btn}>
      <Btns />
      </div>
      <Burger/>
    </div>
  );
};

export default HeaderFixed;
