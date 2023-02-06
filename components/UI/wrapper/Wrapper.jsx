import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import classes from "./wrapper.module.css";
import { motion } from "framer-motion";
import Authorization from "../authorization/Authorization";
import { useSelector } from "react-redux";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useEffect } from "react";

const Wrapper = ({ children }) => {
  const auto = useSelector((state) => state.auth.auto);
  useEffect(() => {
    if (auto) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [auto]);

  return (
    <div className={classes.wrapper}>
      <Header />
      {auto ? <Authorization /> : null}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={classes.inner}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Wrapper;
