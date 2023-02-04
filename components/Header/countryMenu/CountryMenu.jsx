import Container from "@/components/UI/container/Container";
import classes from "./countryMenu.module.css";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getCountryStatus } from "@/store/slice/countryStatus";

const CountryMenu = () => {
  const { data = [] } = useGetDestinationsQuery();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.countryStatus.value);
  return (
    <div
      className={
        state ? `${classes.SubMenu} ${classes.active}` : `${classes.SubMenu}`
      }
      onMouseOver={() => dispatch(getCountryStatus(true))}
      onMouseLeave={() => dispatch(getCountryStatus(false))}
    >
      <Container>
        <div className={classes.inner}>
          <div className={classes.list}>
            {data.map((country) => (
              <Link href={`/country/${country.url}`} key={country.id}>
                <div className={classes.card}>
                  <Image
                    src={`https://turi-uzbekistana.ru/${country.photo}`}
                    alt="image"
                    width="0"
                    height="0"
                    blurDataURL={`https://turi-uzbekistana.ru/${country.photo}`}
                    placeholder="blur"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p>{country.name}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href={"/country"}>
            <p className={classes.link}>Все страны</p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CountryMenu;
