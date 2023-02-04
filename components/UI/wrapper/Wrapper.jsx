import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import classes from './wrapper.module.css'

const Wrapper = ({ children }) => {
  return (
    <div className={classes.wrapper}>
    <Header/>
      <div className={classes.inner}>{children}</div>
      <Footer/>
    </div>
  );
};

export default Wrapper;
