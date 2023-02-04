import Container from "@/components/UI/container/Container";
import classes from "./tourMenu.module.css";
import { useGetTourTypesQuery } from "@/store/middleWares/tourTypesApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getTourStatus } from "@/store/slice/tourStatus";

const TourMenu = () => {
  const { data = [] } = useGetTourTypesQuery();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tourStatus.value);
  return (
    <div
      className={
        state ? `${classes.SubMenu} ${classes.active}` : `${classes.SubMenu}`
      }
      onMouseOver={() => dispatch(getTourStatus(true))}
      onMouseLeave={() => dispatch(getTourStatus(false))}
    >
      <Container>
        <div className={classes.inner}>
          <div className={classes.list}>
            {data.slice(0,10).map((country) => (
              <div className={classes.card} key={country.id}>
                <Image
                  src={`https://turi-uzbekistana.ru/${country.photo}`}
                  alt="image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <p>{country.name}</p>
              </div>
            ))}
          </div>
          <Link href={"/tour"}>
            <p className={classes.link}>Все туры</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TourMenu;
