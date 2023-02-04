import Wrapper from "@/components/UI/wrapper/Wrapper";
import classes from "@/styles/about.module.css";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>
          О нас. Команда Минзифа Тревел- туры в Узбекистан на весь год
        </title>
      </Head>
      <Wrapper>
        <div className={classes.inner}></div>
      </Wrapper>
    </>
  );
};

export default about;
