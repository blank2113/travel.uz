import classes from "./kyrgyzstan.module.css";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import CountryCard from "@/components/UI/countryCard/CountryCard";
import BackWardBtn from "@/components/UI/backWardBtn/BackWardBtn";
import Container from "@/components/UI/container/Container";
import BackWardBtnIn from "@/components/UI/backWardBtnIn/BackWardBtnIn";
// import { useGetToursValuesQuery } from "@/store/middleWares/tourApi";
// import { useMemo } from "react";
// import Filter from "@/components/UI/filter/Filter";
// import { useSelector } from "react-redux";
// import { getItemValueKr } from "@/store/slice/filterSlice";
// import Card from "@/components/UI/card/Card";

const Kyrgyzstan = () => {
  const { data: cities = [] } = useGetDestinationsQuery();
  // const { data: tours = [] } = useGetToursValuesQuery();
  // const valueKr = useSelector((state) => state.filterSlice.valueKr);
  // const itemValueKr = useSelector((state) => state.filterSlice.itemValueKr);

  return (
    <div className={classes.Kyrgyzstan}>
      <div className={classes.top}>
        <h1>Туры в Кыргызстан</h1>
      </div>
      <Container>
      <BackWardBtnIn prevTitle={"country"} title={"Кыргизстан"}/>
        <p className={classes.text}>
          Кыргызстан – место, где все туристические представления об азиатском
          отдыхе развеиваются в пух и прах, уступая место новым и гораздо более
          колоритным впечатлениям. С Minzifa Travel у вас будет возможность в
          этом убедиться!
        </p>
        <p className={classes.text}>
          В Киргизии нет толп туристов, но при этом туризм активно развивается.
          Отдыхающих не принуждают к банальным азиатским развлечениям, но они
          без труда могут прочувствовать всю гамму запахов и вкусов страны. В
          Кыргызстане только вы решаете, на чем отправиться в гости – на
          современном автомобиле или на ослиной повозке. Это то место, где
          встречаются и гармонично уживаются современность и «та самая»
          первозданная Азия.
        </p>
        <p className={classes.sub_title}>История Кыргызстана</p>
        <p className={classes.text}>
          Согласно археологическим раскопкам, первые люди на территории
          современной Киргизии появились в эпоху Палеолита. Они охотились,
          занимались собирательством, лепили глиняную посуду.
        </p>
        <p className={classes.text}>
          В XII веке, как и многие другие народы, киргизы попали под гнет
          монголо-татарского ига. До присоединения киргизских земель к России
          (что особенно было выгодно государству российскому), которое началось
          в XIX столетии, азиатская страна постоянно попадала под власть
          недругов – казахи, китайцы, таджики, узбеки, кокандское ханство.
        </p>
        <p className={classes.text}>
          В 1924 году была образована Киргизская АССР, что совпало с активным
          развитием промышленности. Долгожданную свободу киргизы получили лишь в
          1991 году, но она принесла и серьезный экономический кризис. До сих
          пор полностью оклематься от последствий распада Советского Союза у
          Кыргызстана не получилось, но постепенно страна восстанавливается,
          развивая туризм и приглашая дорогих гостей из любого уголка планеты.
        </p>
        <p className={classes.sub_title}>Что посмотреть в Кыргызстане?</p>
        <p className={classes.text}>
          Совсем неважно, хотят туристы активно провести время или просто
          побродить по городу, увидеть типичную азиатскую страну или развеять
          все известные мифы, насладиться первозданной природой или приблизиться
          к истории – в Киргизии есть все. Знакомство с Киргизской Республикой
          советуем начать с посещения таких мест, как:
        </p>
        <div className={classes.list}>
          <li>
            горы Тянь-Шань – настоящий магнит для туристов. Вершина Пик Победы
            особенно привлекательна для альпинистов, но посмотреть на
            достопримечательность будет интересно и не самым смелым отдыхающим.
            Горы окружают голубые ели, ковры из можжевельника и бесконечные
            цветы;
          </li>
          <li>
            Иссык-Куль – прекрасная идея для пляжного отдыха. Озеро глубокое,
            поэтому здесь комфортно заниматься водными видами спорта и плавать.
            Достопримечательность приносит в экономику Кыргызстана больше всего
            денег, поэтому на развитие курорта не жалеют никаких средств. Вокруг
            озера стоят шезлонги, зонтики, есть бары и кафе;
          </li>
          <li>
            ущелье Алтын-Арашан – атмосфера дикой природы. Здесь туристы могут
            искупаться в минеральных источниках с разными целебными водами,
            которые благотворно влияют на кости, почки, сердце, нервную систему;
          </li>
          <li>
            гора Сулайман Тоо входит в список ЮНЕСКО. Согласно легенде, именно
            эта гора была прибежищем Сулеймана – мусульманского пророка. Поэтому
            киргизы верят в ее магические и религиозные свойства. Туристы могут
            как забраться на гору, так и заглянуть в одну из пещер, чтобы
            изучить древние петроглифы.
          </li>
        </div>
        <p className={classes.sub_title}>Климат Кыргызстана</p>
        <p className={classes.text}>
          В Киргизии резко континентальный климат. Засушливость объясняется
          сразу 3 причинами: близкое соседство с пустынями, удаленность от
          крупных водных объектов, расположение в центре Евразии в Северном
          полушарии.
        </p>
        <p className={classes.text}>
          У киргизов есть значительный повод для радости – минимум 247 солнечных
          дней в году. Но устойчивым климат назвать трудно: летом температура
          воздуха достигает +44 °С, а зимой (в горах) было зафиксировано -53 °С.
          Весна и осень редко преподносят сюрпризы: в основном в межсезонье
          тепло и все также солнечно.
        </p>
        <p className={classes.sub_title}>Когда лучше ехать в Кыргызстан?</p>
        <p className={classes.text}>
          Для поездки в Киргизию совсем необязательно подстраивать отпуск:
          азиатская страна порадует в любое время года. Но приобретая тур в
          Киргизскую республику, стоит помнить, что каждый сезон не похож на
          предыдущий, а значит, и отдых будет отличаться.
        </p>
        <p className={classes.sub_title}>Весна в Киргизии</p>
        <p className={classes.text}>
          Несмотря на гостеприимную весну, март в Кыргызстане – сезон ливневых
          дождей. Но это совсем не значит, что знакомство со страной нужно
          перенести. Наоборот! Весной в Киргизской республике распускаются
          деревья и цветы, поэтому даже в городе будет не покидать ощущение, что
          вы приблизились к девственной природе. Можно побродить по музеям или
          сделать красивые фотографии на улице: главное, не забыть зонтик или
          дождевик.
        </p>
        <p className={classes.sub_title}>Лето в Киргизии</p>
        <p className={classes.text}>
          В это время года в Киргизии тепло, но не удушающее жарко, поэтому
          прогулки будут комфортными хоть утром, хоть вечером. В июне начинаются
          музыкальные фестивали, а пребывание в горах становится главным пунктом
          в вишлисте туристов.
        </p>
        <p className={classes.sub_title}>Осень в Киргизии</p>
        <p className={classes.text}>
          В отличие от весенних месяцев осень в Кыргызстане не может
          похвастаться продолжительными дождями. А вот золотой листвой и мягким
          светом – всенепременно! В это время года можно заняться рафтингом,
          покататься на лошадях или побегать по экскурсиям.
        </p>
        <p className={classes.sub_title}>Зима в Киргизии</p>
        <p className={classes.text}>
          Зимние месяцы в Киргизии можно провести классически, отправившись
          покорять горные вершины. Но из-за меньшего наплыва туристов действуют
          скидки во всех гостиницах, так что есть возможность отдохнуть в
          первоклассной гостинице с баней и вкусной едой. Сколько бы не было
          сказано о Кыргызстане, этого всегда будет недостаточно. Поэтому
          предлагаем самим убедиться в том, что Киргизия соответствует всем тем
          комплиментам, которыми ее одаривают.Обращайтесь с любыми вопросами в
          whatsapp, telegram или e-mail travel@minzifatravel.com. До встречи в
          Киргизии!
        </p>
        <div className={classes.cities}>
          <p className={classes.sub_title}>Города Таджикистана</p>
          <div className={classes.content}>
            {cities
              .filter((item) => item.url === "kyrgyzstan")
              .map((el) =>
                el.cities.map((item) => (
                  <CountryCard key={item.id} item={item} />
                ))
              )}
          </div>
        </div>
      </Container>
      {/* <div className={classes.tours}>
        <p className={classes.sub_title}>Путешествие в Таджикистан</p>
        <>
          {useMemo(() => {
            return (
              <Filter data={valueKr} value={itemValueKr} fn={getItemValueKr} />
            );
          }, [valueKr, itemValueKr, getItemValueKr])}
        </>
        <div className={classes.content}>
          {itemValueKr !== "Все туры"
            ? tours
                .filter(
                  (el) =>
                    el.country ===
                      "Узбекистан, Казахстан, Таджикистан, Кыргызстан, Туркменистан" ||
                    el.country === "Кыргызстан"
                )
                .filter((item) => item.tourType === itemValueKr)
                .map((el) => <Card key={el.id} item={el} />)
            : tours
                .filter((el) => el.country === "Кыргызстан")
                .map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div> */}
    </div>
  );
};

export default Kyrgyzstan;
