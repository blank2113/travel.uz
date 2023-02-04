import classes from "./block3.module.css";

const Block3 = () => {
  return (
    <div className={classes.Block3}>
      <p className={classes.text}>
        Главное - правильно определиться с выбором тур оператора. Наши Тур
        Консультанты подберут для вас оптимальный тур пакет, чтобы сделать ваш
        отдых насыщенным и увлекательным, но при этом, по умеренной цене.
      </p>
      <p className={classes.sub_title}>
        Профессиональная работа персонала MinzifaTravel гарантирует успех вашего
        путешествия. Мы:
      </p>
      <div className={classes.list}>
        <li>предложим готовые Турпакеты “Все включено”</li>
        <li>составим "индивидуальный тур"</li>
        <li>забронируем/выкупим авиабилеты</li>
        <li>скоординируем расписание ваших рейсов</li>
        <li>просчитаем оптимальное решение маршрута</li>
        <li>организуем встречи в аэропорту и проводы</li>
        <li>обеспечим комфортное проживание</li>
        <li>предоставим лучших гидов и переводчиков</li>
      </div>
    </div>
  );
};

export default Block3;
