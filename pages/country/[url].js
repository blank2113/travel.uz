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
import Tajikistan from "@/components/aboutPage/taj/Tajikistan";
import Kyrgyzstan from "@/components/aboutPage/krg/Kyrgyzstan";
import Turkmenistan from "@/components/aboutPage/turk/Turkmenistan";

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
          {query.url === "uzbekistan" ? (
            <Uzbekistan />
          ) : query.url === "kazakhstan" ? (
            <Kazakhstan />
          ) : query.url === "tajikistan" ? (
            <Tajikistan />
          ) : query.url === "kyrgyzstan" ? (
            <Kyrgyzstan />
          ) : (
            <Turkmenistan />
          )}
        </div>
      </Wrapper>
    </>
  );
}
