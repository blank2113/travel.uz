import classes from "./kazakhstan.module.css";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import { useSelector, useDispatch } from "react-redux";
import CountryCard from "@/components/UI/countryCard/CountryCard";
import Container from "@/components/UI/container/Container";
import BackWardBtnIn from "@/components/UI/backWardBtnIn/BackWardBtnIn";

const Kazakhstan = () => {
  const { data: countries = [] } = useGetDestinationsQuery();

  return (
    <div className={classes.Kazakhstan}>
      <div className={classes.top}>
        <h1>Туры в Казахстан</h1>
      </div>
      <Container>
      <BackWardBtnIn prevTitle={"country"} title={"Казахстан"}/>
        <p className={classes.text}>
          Отправляйтесь в настоящее приключение вместе с Minzifa Travel!
          Сказочные природные пейзажи, невероятно вкусная национальная еда,
          добродушные жители и захватывающая история. И все это он – Казахстан!
        </p>
        <p className={classes.text}>
          Особая прелесть страны в ее расположении – стык Европы и Азии. Именно
          поэтому государство впитало в себя массу национальных, культурных и
          религиозных течений, которые и делают ее уникальной и вместе с тем
          такой похожей на все самое любимое и родное.
        </p>
        <p className={classes.text}>
          Казахстан – это страна свободолюбивых и гордых людей, которые всегда
          рады туристам со всего мира. Впитайте остроту вкусов и яркость красок,
          а Minzifa Travel сделает каждый ваш день в этой удивительной стране
          незабываемым!
        </p>
        <h1 className={classes.title}>
          Когда ехать в Казахстан для путешествия?
        </h1>
        <p className={classes.text}>
          Казахстан – это страна, которая прекрасна в любой сезон года и в любую
          погоду. Выбирать время для путешествия, необходимо отталкиваясь от
          того, чем именно хотелось бы заняться в отпуске. Собираетесь в
          азиатскую страну:
        </p>
        <div>
          <li>
            весной? Готовьтесь увидеть цветущие луга и заснеженные вершины. Это
            отличное время для походов по каньонам и неспешных прогулок по
            городу. Холода остались позади, а до известной казахской жары еще
            есть время – лучшей поры для знакомства с достопримечательностями и
            не придумать!
          </li>
          <li>
            летом? Если вы не бывали в Казахстане в июне, июле или августе, то,
            скорее всего, вы ничего не знаете о жаркой погоде! Но заядлые
            путешественники уверены – в этом сезоне есть особая прелесть.
            Во-первых, небольшое число туристов, а значит, меньше очередей и
            больше возможности занять лучший столик в кафе и забронировать
            чудесный номер в отеле. Во-вторых, на севере страны все же
            достаточно умеренный климат. А потому можно смело прогуляться по
            национальным паркам или насладиться водными процедурами. А
            в-третьих, жаркий Казахстан – это классика, с которой хоть раз в
            жизни должен познакомиться каждый отдыхающий!
          </li>
          <li>
            осенью? В сентябре в стране все еще очень тепло, но деревья уже
            начинают окрашиваться в золото. Значит, приходит время удачных
            фотосессий! Осенние пейзажи Казахстана не могут оставить
            равнодушными, и приятная погода располагает к долгим прогулкам. В
            это время рынки заполняются свежими фруктами и овощами, поэтому
            уехать без урожая точно не получится!
          </li>
          <li>
            зимой? Лыжи, сноуборд, коньки: Казахстан прекрасно подходит для
            горнолыжного отдыха. Если к активностям вы равнодушны, можно
            пройтись по музеям или посетить баню.
          </li>
        </div>
        <p className={classes.text}>
          После того, как была выбрана дата поездки, можно подумать и о
          направлении. В каждом уголке страны есть удивительные места, которые
          очаруют даже самых опытных туристов.
        </p>
        <p className={classes.sub_title}>Нур-Султан - столица Казахстана</p>
        <p className={classes.text}>
          Столица есть столица, поэтому скучать по прибытию точно не придется.
          Полюбуйтесь крупнейшей в Центральной Азии мечетью с высокими
          минаретами – Хазрет Султан. Загляните в самый большой шатер мира и по
          совместительству интереснейший торговый центр – Хан Шатыр. Проведите
          время на романтичной лодочной прогулке по реке Ишим. А если позволяет
          время, посетите интерактивный кулинарный мастер-класс, или хотя бы
          просто устройте забег по всем кафе города.
        </p>
        <p className={classes.sub_title}>Национальные парки</p>
        <p className={classes.text}>
          В Казахстане так просто слиться с природой! А все потому что на
          территории страны находится 13 национальных парков. Здорово то, что
          парки разбросаны по всему государству, поэтому попасть в них можно из
          любой точки. Горы, долины, леса, озера, реки – великолепные пейзажи
          гарантированы.
        </p>
        <p className={classes.sub_title}>Алматы - удивительный город</p>
        <p className={classes.text}>
          Несмотря на то, что город имеет статус «бывшей столицы», удивлять он
          умеет и в настоящем. Колоритные базары, музеи, торговые центры,
          городские парки – здесь можно смотреть все и сразу. Не прогадаете!
        </p>
        <p className={classes.sub_title}>
          Юг - быт и культура кочевия Казахстана.
        </p>
        <p className={classes.text}>
          Если вы хотите узнать больше об истории казахского народа, то вам
          сюда. Туркестан, Отрар, Сайрам – мечети и мавзолеи в этих городах
          могут рассказать много интересного о тайнах и культуре кочевого
          народа.
        </p>
        <p className={classes.text}>
          Казахстан – удивительная страна, и мы будем рады сопровождать вас на
          всех этапах вашего с ней знакомства. С Minzifa Travel путешествие
          станет увлекательнее, безопаснее и ярче! Обращайтесь с любыми
          вопросами в whatsapp, telegram или e-mail travel@minzifatravel.com. До
          встречи в Казахстане!
        </p>
        <div className={classes.cities}>
          <p className={classes.sub_title}>Города Казахстана</p>
          <div className={classes.content}>
            {countries
              .filter((item) => item.url === "kazakhstan")
              .map((el) =>
                el.cities.map((item) => (
                  <CountryCard key={item.id} item={item} />
                ))
              )}
          </div>
        </div>
      </Container>
      {/* <div className={classes.tours_wrapper}>
        <p className={classes.sub_title}>Путешествие в Казахстан</p>
        <div className={classes.filter}>
          {filterItem.map((item) => (
            <p
              key={item.id}
              className={
                itemValueK === item.name
                  ? `${classes.filter_item} ${classes.active}`
                  : `${classes.filter_item}`
              }
              onClick={() => dispatch(getItemValueK(item.name))}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className={classes.tours_content}>
          {itemValueK !== "Все туры"
            ? tours.filter(
                  (el) =>
                    el.country ===
                      "Узбекистан, Казахстан, Таджикистан, Кыргызстан, Туркменистан" ||
                    el.country === "Казахстан"
                )
                .filter((item) => item.tourType === itemValueK)
                .map((el) => <Card key={el.id} item={el} />)
            : tours.filter(el => el.country === 'Казахстан').map((item) => <Card key={item.id} item={item} />)}
        </div>
      </div> */}
    </div>
  );
};

export default Kazakhstan;
