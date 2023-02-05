import Content from "@/components/creationTour/content/Content";
import Form from "@/components/creationTour/form/Form";
import Container from "@/components/UI/container/Container";
import Wrapper from "@/components/UI/wrapper/Wrapper";
import classes from "@/styles/createMyTrip.module.css";
import Head from "next/head";

const create_my_trip = () => {
  return (
    <>
      <Head>
        <title>
          Авторские туры в Узбекистан: конструктор путешествия для туриста.
          Создаем путёвку в 3 клика.
        </title>
      </Head>
      <Wrapper>
        <div className={classes.inner}>
          <div className={classes.top}>
            <Container>
              <h1>Создайте свой тур по индивидуальному желаемому маршруту</h1>
              <p className={classes.sub_title}>
                Наслаждайтесь безопасным и индивидуальным путешествием с Minzifa
                Travel.
              </p>
            </Container>
          </div>
          <div className={classes.main}>
            <Form/>
            <Content/>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default create_my_trip;
