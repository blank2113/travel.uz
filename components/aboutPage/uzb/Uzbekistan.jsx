import Container from "@/components/UI/container/Container";
import classes from "./uzbekistan.module.css";
import Image from "next/image";
import photo from "@/public/uzb1.jpg";
import photo2 from "@/public/uzb2.jpg";
import photo3 from "@/public/uzb3.jpg";
import photo4 from "@/public/uzb4.jpg";
import photo5 from "@/public/uzb5.jpg";
import photo6 from "@/public/uzb6.jpg";
import mapImg from "@/public/map.png";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import CountryCard from "@/components/UI/countryCard/CountryCard";
import { useSelector, useDispatch } from "react-redux";
import { getItemValue } from "@/store/slice/filterSlice";
import { useGetToursValuesQuery } from "@/store/middleWares/tourApi";
import Card from "@/components/UI/card/Card";

const Uzbekistan = () => {
  const { data = [] } = useGetDestinationsQuery();
  const { data: toursS = [] } = useGetToursValuesQuery();
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.filterSlice.value);
  const itemValue = useSelector((state) => state.filterSlice.itemValue);

  return (
    <div className={classes.Uzb}>
      <p className={classes.text}>
        Узбекистан расположен в самом сердце Центральной Азии. Природный
        ландшафт страны поражает своим разнообразием. Это и высокие горы с
        заснеженными вершинами, и утопающие в зелени плодородные долины, и
        бескрайние степи с поющими ветрами, и пустыни, где в песках рождаются
        легенды. В нашей стране бережно хранят традиции, обычаи и культурное
        наследие своих предков. Памятники древнего зодчества и архитектурные
        сооружения и здания нашего времени гармонично сочетаются в облике
        современных узбекских городов. А узбекский народ во все времена славился
        своим гостеприимством и доброжелательностью.
      </p>
      <h2 className={classes.title}>История Узбекистана</h2>
      <p className={classes.text}>
        История Узбекистана корнями уходит в глубину веков. Узбекская земля
        помнит много исторических сражений и походов. Этот край всегда привлекал
        завоевателей - Александр Македонский, более известный в Азии, как
        Искандер, армии персидских правителей, полчища Чингисхана. На протяжении
        столетий многие народности, как кочевые, так и оседлые, сменяли друг
        друга, устраивали поселения, создавали семьи, перенимали обычаи и
        традиции. Каждое поколение оставило после себя свое культурное наследие.
        Такие разные историко-культурные направления сплелись воедино в
        прекрасную восточную мелодию. Современники получили бесценное богатство
        - памятники древней архитектуры и зодчества, национальная музыка и
        танцы, литература и поэзия, философские труды и научные открытия. А
        сколько еще удивительных секретов таит в себе земля, расположенная между
        Амударьей и Сырдарьей? Приезжайте в Узбекистан! И кто знает, может
        именно вы раскроете очередную загадку. И возможно именно с вами древние
        города поделятся своими многочисленными тайнами.
      </p>
      <div className={classes.photo_wrapper}>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo2}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo3}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <p className={classes.sub_title}>Чем может удивить вас Узбекистан?</p>
      <div>
        <li>Узнайте почему туристы так любят Бухару</li>
        <li>Посетите топ 10 мест в Сурхандарье</li>
        <li>Где поесть самый вкусный плов в Ташкенте?</li>
        <li>Познакомитесь с танцевальной культурой Хорезма</li>
        <li>Многонациональный Узбекистан</li>
        <li>Прожить один день в юрте как настоящий кочевник</li>
      </div>
      <div className={classes.territory}>
        <p className={classes.sub_title}>Территория Узбекистана</p>
        <Image
          src={mapImg}
          alt="image"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <p className={classes.text}>
          Государство Узбекистан расположено в Средней Азии. Столица - город
          Ташкент. Государственный строй - президентская республика.
          Северо-восточная часть страны соседствует с Казахстаном, восточная и
          юго-восточная части страны имеют границы с двумя республиками:
          Кыргызстаном и Таджикистаном, западная часть Узбекистана имеет границу
          с Туркменией, а южная часть соседствует с Афганистаном. Протяженность
          государственных границ насчитывает 6 221 километров. Территория: 448,9
          тыс. кв.км.
        </p>
        <p className={classes.text}>
          По административному устройству территория Узбекистана разделена на
          двенадцать областей: Андижанскую, Бухарскую, Джизакскую, Ферганскую,
          Самаркандскую, Сурхандарьинскую, Сырдарьинскую, Навоинскую,
          Наманганскую, Хорезмскую, Кашкадарьинскую и Ташкентскую. Каракалпакия,
          как автономная республика, так же входит в состав республики.
        </p>
      </div>
      <p className={classes.sub_title}>Природа Узбекистана</p>
      <p className={classes.text}>
        <span>Природа Узбекистана</span>- это сочетание контрастных ландшафтов.
        Благодаря территориальной масштабности региона, равнины и долины
        сменяются горными массивами, а леса и полесья – пустынями и
        полупустынями. Пустыни Кызылкум и Каракумы добавляют таинственность в
        замысловатый рельефный рисунок страны. Климат резко континентальный.
        Осадков выпадает немного. Влажность воздуха относительно низкая.
        Разнообразность природного ландшафта обуславливает богатые флору и фауну
        Узбекистана. Растительный мир региона насчитывает более 6 000 видов
        растений. Из них только 3 700 видов высших растений, пятая часть которых
        – это эндемики, т.е. растения которые больше нигде не встречаются. Фауна
        страны насчитывает 600 видов позвоночных, более 90 видов млекопитающих,
        более 40 видов рыб. Для охраны богатого животного и растительного мира в
        Узбекистане созданы заповедники, национальные парки, заказники.
      </p>
      <div className={classes.photo_wrapper}>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo4}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo5}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.photo_wrapper_item}>
          <Image
            src={photo6}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <p className={classes.sub_title}>Памятка для активных туристов</p>
      <div>
        <li>Погода и климат в Узбекистане</li>
        <li>Выставка Петроглифов Под Открытым Небом</li>
        <li>Как классно покататься в горах, не посещая Европы?</li>
        <li>Когда лучше всего ехать в Узбекистан?</li>
        <li>Аральское море - Мираж Или Реальность?</li>
      </div>
      <p className={classes.sub_title}>Туры в Узбекистан</p>
      <p className={classes.text}>
        Ежегодно узбекистанцы принимают сотни тысяч туристов. Благодаря местным
        климатическим условиям интерес к отдыху в Узбекистане проявляется не
        только весной и летом, но и в осенние и зимние месяцы. Традиционно
        иностранных гостей привлекают памятники древней архитектуры и зодчества,
        богатое культурное и историческое наследие страны. Однако, в Узбекистане
        также расположены лечебницы и санатории, где можно отдохнуть и поправить
        свое здоровье. Туры в Узбекистан это не просто один из способов провести
        отпуск, а еще и возможность познать чужую культуру и историю,
        познакомиться с обычаями и традициями самобытного узбекского народа.
        Многих людей привлекает активный вид отдыха в Узбекистане. Если вы
        любите приключения и ведете активный образ жизни, то в наших санаториях
        и домах отдыха, расположенных в горных районах, на территориях близ озер
        и рек можно с удовольствием и с пользой для своего здоровья провести
        время.
      </p>
      <p className={classes.sub_title}>Информация для туриста</p>
      <div>
        <li>Виза в Узбекистан</li>
        <li>Посольства в Узбекистане</li>
        <li>Консульства Узбекистана за рубежом</li>
        <li>Что нужно брать с собой в поездку</li>
        <li>Узбекская кухня</li>
        <li>ЧаВО</li>
      </div>
      <p className={classes.sub_title}>Города Узбекистана</p>
      <div className={classes.countries}>
        {data
          .filter((item) => item.url === "uzbekistan")
          .map((item) =>
            item.cities.map((el) => <CountryCard key={el.id} item={el} />)
          )}
      </div>
      <p className={classes.sub_title}>Путешествие в Узбекистан</p>
      <div className={classes.tours}>
        <div className={classes.filter}>
          {tours.map((item) => (
            <div
              className={
                itemValue === item.name
                  ? `${classes.filter_item} ${classes.active}`
                  : `${classes.filter_item}`
              }
              key={item.id}
              onClick={() => dispatch(getItemValue(item.name))}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className={classes.tours_content}>
          {itemValue !== "Все туры"
            ? toursS
                .filter((item) => item.tourType === itemValue)
                .map((el) => <Card key={el.id} item={el} />)
            : toursS.map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Uzbekistan;