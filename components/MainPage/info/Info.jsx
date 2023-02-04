import Container from "@/components/UI/container/Container";
import classes from "./info.module.css";
import Block1 from "./block1/Block1";
import Block2 from "./block2/Block2";
import Block3 from "./block3/Block3";

const Info = () => {
  return (
    <section className={classes.Info}>
      <Container>
        <h5 className={classes.title}>
          Туры в Узбекистан на 2023 год с ценами, отзывами из Москвы и Спб.
        </h5>
        <div className={classes.content}>
            <Block1/>
            <Block2/>
            <Block3/>
        </div>
      </Container>
    </section>
  );
};

export default Info;
