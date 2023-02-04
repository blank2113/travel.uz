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
        <div className={classes.inner}></div>
      </Wrapper>
    </>
  );
};

export default create_my_trip;
