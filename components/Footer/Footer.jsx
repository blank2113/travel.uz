import classes from "./footer.module.css";
import Contacts from "./contacts/Contacts";
import FooterNav from "./footerNav/FooterNav";
import FooterNews from "./footerNews/FooterNews";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.inner}>
        <Contacts />
        <FooterNav />
        <FooterNews />
      </div>
      <div className={classes.bottom}>
        <p>
          © 2014-2023 Minzifa Travel. Все права защищены. "Unique Travel" FE by
          Minzifa Travel. Ул. Эшони пир, 70, Бухара 200118, Узбекистан. |
          Политика Конфиденциальности
        </p>
      </div>
    </footer>
  );
};

export default Footer;
