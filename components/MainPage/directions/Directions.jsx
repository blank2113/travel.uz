import Container from "@/components/UI/container/Container";
import { useGetDestinationsQuery } from "../../../store/middleWares/destinationsApi";
import CountryCard from "@/components/UI/countryCard/CountryCard";
import classes from "./directions.module.css";
import Image from "next/image";
import Link from "next/link";
import photo1 from '@/public/img1.webp'
import photo2 from '@/public/img2.webp'


const Directions = () => {
  const { data = [] } = useGetDestinationsQuery();

  return (
    <>
      <section className={classes.Directions}>
        <Container>
          <div className={classes.inner}>
            <h4>Направления</h4>
            <div className={classes.countries}>
              {data.map((item) => (
                <CountryCard item={item} />
              ))}
            </div>
            <div className={classes.content}>
              <div className={classes.item1}>   
                <div className={classes.text}>
                  <p className={classes.text_title}>Достопримечательности Центральной Азии</p>
                  <p className={classes.text_text}>Достопримечательности Центральной Азии - сокровища древнего Востока.</p>
                  <Link href={"/"}>
                    <p className={classes.btn}>Подробнее</p>
                  </Link>
                </div>
              </div>
              <div className={classes.item2}>
                <div className={classes.text}>
                  <p className={classes.text_title}>Достопримечательности Центральной Азии</p>
                  <p className={classes.text_text}>Достопримечательности Центральной Азии - сокровища древнего Востока.</p>
                  <Link href={"/"}>
                    <p className={classes.btn}>Подробнее</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Directions;
