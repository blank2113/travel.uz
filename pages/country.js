import BackWardBtn from "@/components/UI/backWardBtn/BackWardBtn";
import Wrapper from "@/components/UI/wrapper/Wrapper";
import classes from "@/styles/country.module.css";
import Head from "next/head";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import CountryCard from "@/components/UI/countryCard/CountryCard";
import Link from "next/link";
import Container from "@/components/UI/container/Container";

const country = () => {
  const { data = [] } = useGetDestinationsQuery();
  return (
    <>
      <Head>
        <title>Страны</title>
      </Head>
      <Wrapper>
        <div className={classes.inner}>
          <Container>
          <BackWardBtn title={"Страны"} />
          <div className={classes.content}>
          {data.map((country) => (
              <Link key={country.id} href={`/country/${country.url}`}>
                <CountryCard item={country} />
              </Link>
            ))}
           
          </div>
          </Container>
        </div>
      </Wrapper>
    </>
  );
};

export default country;
