import Wrapper from '@/components/UI/wrapper/Wrapper'
import classes from '@/styles/review.module.css'
import Head from 'next/head'

const review = () => {
  return (
    <>
        <Head>
            <title>Отзывы</title>
        </Head>
        <Wrapper>
            <div className={classes.inner}>
                
            </div>
        </Wrapper>
    </>
  )
}

export default review