import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import classes from "./wrapper.module.css";
import { motion } from "framer-motion";

const Wrapper = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity:0}}
        className={classes.inner}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Wrapper;
