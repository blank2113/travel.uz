import Wrapper from "@/components/UI/wrapper/Wrapper";
import Head from "next/head";
import { useRouter } from "next/router";

export default function (){
    const {query}= useRouter()
    return(
        <>
            <Head>
                <title></title>
            </Head>
            <Wrapper>

            </Wrapper>
        </>
    )
}