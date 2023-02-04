import Container from "@/components/UI/Container/Container";
import classes from "./news.module.css";
import { useGetNewsQuery } from "@/store/middleWares/newsApi";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faCalendar,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const News = () => {
  const { data = [] } = useGetNewsQuery();
  return (
    <section className={classes.News}>
      <Container>
        <div className={classes.content}>
          <h5 className={classes.title}>Новости Узбекистана</h5>
          <div className={classes.inner}>
            {data.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.top}>
                  <Image
                    src={`https://turi-uzbekistana.ru/${item.photo}`}
                    alt="image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className={classes.img}
                  />
                  <div className={classes.details}>
                    <p>
                      <FontAwesomeIcon
                        icon={faGlobeAsia}
                        className={classes.icon}
                      />
                      {item.country}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className={classes.icon}
                      />
                      {item.date_created}
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faEye} className={classes.icon} />
                      {item.views}
                    </p>
                  </div>
                </div>
                <div className={classes.bottom}>
                  <p className={classes.sub_title}>{item.name}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={"/"}>
            <button className={classes.link}>Вcе новости</button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default News;
