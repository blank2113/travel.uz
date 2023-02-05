import classes from './requisites.module.css'

const Requisites = () => {
  return (
    <div>
      <h2 className={classes.title}>Наши реквизиты:</h2>
      <ul className={classes.list}>
        <li>
          <strong>Юридическое название:</strong>&nbsp;“Unique Travel” FE by
          “Minzifa Travel”
        </li>
        <li>
          <strong>Лицензия:</strong>&nbsp;T-0087
        </li>
        <li>
          <strong>Сертификат:</strong>&nbsp;00 67 84.
        </li>
        <li>
          <strong>Головной офис:</strong> Республика Узбекистан, г. Бухара, ул.
          Эшони пир, 53
        </li>
        <li>
          <strong>Е-mail:</strong>{" "}
          <a href="mailto:travel@minizfatravel.com">travel@minzifatravel.com</a>
        </li>
        <li>
          <strong>Web:</strong>{" "}
          <a href="minzifatravel.com">minzifatravel.com</a>;{" "}
          <a href="turi-uzbekistana.ru">turi-uzbekistana.ru</a>
        </li>
      </ul>
    </div>
  );
};

export default Requisites;
