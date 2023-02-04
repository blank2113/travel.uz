import Wrapper from "@/components/UI/Wrapper/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "@/styles/countries.module.css";
import Container from "../../components/UI/container/Container";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import Image from "next/image";
import BackWardBtn from "@/components/UI/backWardBtn/BackWardBtn";
import Uzbekistan from "@/components/aboutPage/uzb/Uzbekistan";
import Kazakhstan from "@/components/aboutPage/kz/Kazakhstan";

export default function () {
  const { query } = useRouter();
  const { data = [] } = useGetDestinationsQuery();
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Wrapper>
        <div className={classes.inner}>
          <div className={classes.top}>
            {data
              .filter((item) => item.url === query.url)
              .map((item) => (
                <div key={item.id} className={classes.wrapper}>
                  <h1>{item.name}</h1>
                  <Image
                    src={`https://turi-uzbekistana.ru/${item.photo}`}
                    alt="image"
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className={classes.img}
                  />
                </div>
              ))}
          </div>
          <Container>
            <div className={classes.content}>
                <BackWardBtn title={"страны"}/>
            </div>
            {query.url === 'uzbekistan' ? <Uzbekistan/> : query.url === 'kazakhstan' ? <Kazakhstan/> : null}
          </Container>
        </div>
      </Wrapper>
    </>
  );
}
