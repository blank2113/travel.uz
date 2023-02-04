import classes from "./block1.module.css";

const Block1 = () => {
  return (
    <div className={classes.Block1}>
      <p className={classes.text}>
        Туры в Узбекистан, индивидуальные и групповые
      </p>
        <p className={classes.text_inner}>
          - разработанные нашей туристической компанией MinzifaTravel,
          составлены с учетом наибольшей востребованности туристических объектов
          и заинтересованности гостей, их пожеланий и индивидуальных
          предпочтений.
        </p>
      <p className={classes.sub_title}>Мы предлагаем:</p>
      <div className={classes.list}>
        <li>Индивидуальные и Групповые туры</li>
        <li>VIP туры, Бизнес туры, Деловые туры</li>
        <li>Туры по индивидуальной программе</li>
        <li>Muslim туры</li>
        <li>Семейные туры</li>
        <li>Туры с детьми</li>
        <li>Комбинированные туры по Средней Азии</li>
        <li>Исторические туры</li>
        <li>Культурные туры</li>
        <li>Гастрономические туры</li>
        <li>Экскурсии по городам</li>
      </div>
    </div>
  );
};

export default Block1;
