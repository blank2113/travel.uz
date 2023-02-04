import classes from "./seasonalTour.module.css";
import {useGetSeasonalTourValuesQuery} from '../../../store/middlewares/seasonalTourApi'
import Card from "../../UI/card/Card";
import Container from "@/components/UI/container/Container";

const SeasonalTour = ({title}) => {
    const {data} = useGetSeasonalTourValuesQuery()
  return (
    <>
      {data ? (
        <section className={classes.SeasonalTour}>
          <Container>
            <h2>{title}</h2>
            <div className={classes.inner}>
              {data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default SeasonalTour;
