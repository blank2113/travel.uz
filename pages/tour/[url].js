import Wrapper from "@/components/UI/wrapper/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from '@/styles/general.module.css'

export default function () {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <Wrapper>
        <div className={classes.inner}>
          <p>{query.url}</p>
        </div>
      </Wrapper>
    </>
  );
}
