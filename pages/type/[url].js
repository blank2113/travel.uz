import Wrapper from "@/components/UI/wrapper/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";

const [url] = () => {
    const {query} = useRouter();
  return (
    <>
      <Head></Head>
      <Wrapper>

      </Wrapper>
    </>
  );
};

export default [url];
