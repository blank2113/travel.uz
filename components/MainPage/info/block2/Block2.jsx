import Link from "next/link";
import classes from "./block2.module.css";

const Block2 = () => {
  return (
    <div className={classes.Block2}>
      <p className={classes.title}>
        Отдых в Узбекистане
      </p>
        <p className={classes.text}>
          - это яркое солнце и восточное гостеприимство, самобытная культура и
          вековые традиции, великолепная кухня, национальная музыка и танцы.
          Многие объекты древней архитектуры и зодчества Узбекистана
        </p>
      <p className={classes.sub_title}>
        Вас ждут удивительные приключения и открытия:
      </p>
      <div className={classes.list}>
        <li>
          <Link href={"/tour"}>
            "Вслед за звездой." Бухара - Шахрисабз - Самарканд
          </Link>
        </li>
        <li>
          <Link href={"/tour"}>
            "Четыре жемчужины Узбекистана." Ташкент - Самарканд - Бухара - Хива
          </Link>
        </li>
        <li>
          <Link href={"/tour"}>"Тайны пустыни Кызылкум. Юртовый лагерь"</Link>
        </li>
        <li>
          <Link href={"/tour"}>"Застывшая мелодия." Аральское море</Link>
        </li>
        <li>
          <Link href={"/tour"}>"Две легенды. Самарканд. Бухара"</Link>
        </li>
        <li>
          <Link href={"/tour"}>"Гастрономический тур в Узбекистан"</Link>
        </li>
      </div>
      <p className={classes.text_bottom}>
        - эти и многие другие наши туры откроют для вас загадочный мир Востока,
        полный легенд, тепла и улыбок.
      </p>
    </div>
  );
};

export default Block2;
