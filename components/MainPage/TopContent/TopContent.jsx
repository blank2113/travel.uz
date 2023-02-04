import Container from "@/components/UI/Container/Container";
import classes from "./topContent.module.css";
import Search from "../../UI/Search/Search";

const TopContent = () => {
  return (
    <section className={classes.TopContent}>
      <Container>
        <div className={classes.inner}>
          <p>
            Туры по Узбекистану, туры для небольших групп и индивидуальные туры
            по Узбекистану
          </p>
          <h1>
            Создайте свое следующее воспоминание о путешествии с{" "}
            <span>Minzifa Travel</span>
          </h1>
          <p>
            Разработка лучших туров и маршрутов по Узбекистану на протяжении
            более десяти лет
          </p>
          <Search />
        </div>
      </Container>
    </section>
  );
};

export default TopContent;
