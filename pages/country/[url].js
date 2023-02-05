import Wrapper from "@/components/UI/Wrapper/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "@/styles/countries.module.css";
import { useGetDestinationsQuery } from "@/store/middleWares/destinationsApi";
import Uzbekistan from "@/components/countryTour/uzb/Uzbekistan";
import Kazakhstan from "@/components/countryTour/kz/Kazakhstan";
import Tajikistan from "@/components/countryTour/taj/Tajikistan";
import Kyrgyzstan from "@/components/countryTour/krg/Kyrgyzstan";
import Turkmenistan from "@/components/countryTour/turk/Turkmenistan";

export default function () {
  const { query } = useRouter();
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
