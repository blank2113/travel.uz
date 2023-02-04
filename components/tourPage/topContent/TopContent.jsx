import classes from "./topContent.module.css";

const TopContent = () => {
  return (
    <div className={classes.TopContent}>
      <div className={classes.inner}>
        <div className={classes.item_l}>
          <h1>Все туры</h1>
        </div>
        <div className={classes.item}>
          <div className={classes.elem}>
            <div className={classes.top}>
              <div className={classes.num}>1</div>
              <div className={classes.line} />
            </div>
            <p className={classes.sub_title}>Выберите тур</p>
            <p className={classes.text}>
              Авторские туры - неизведанные маршруты и уникальные приключения от
              настоящих жителей всех станов любящих свою страну.
            </p>
          </div>
          <div className={classes.elem}>
            <div className={classes.top}>
              <div className={classes.num}>2</div>
              <div className={classes.line} />
            </div>
            <p className={classes.sub_title}>Уточните все детали</p>
            <p className={classes.text}>
              Расспросите обо всем важном от менеджеров и авторов туров
              напрямую. Доступны онлайн
            </p>
          </div>
          <div className={classes.elem}>
            <div className={classes.top}>
              <div className={classes.num}>3</div>
              <div className={classes.line} />
            </div>
            <p className={classes.sub_title}>Забронируйте место</p>
            <p className={classes.text}>
              Мы гарантируем лучшее качество, безопасность платежей и гибкую
              политику отмен, с услугой “Несгораемый депозит“.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
