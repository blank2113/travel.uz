import FilterBlock from '@/components/tourPage/filter/FilterBlock'
import TopContent from '@/components/tourPage/topContent/TopContent'
import BackWardBtn from '@/components/UI/backWardBtn/BackWardBtn'
import Wrapper from '@/components/UI/wrapper/Wrapper'
import classes from '@/styles/tour.module.css'
import Head from 'next/head'
import {useGetToursValuesQuery} from '@/store/middleWares/tourApi'
import Card from '@/components/UI/card/Card'

const tour = () => {
  const {data =[]}= useGetToursValuesQuery()
  return (
    <>
        <Head>
            <title>Все туры</title>
        </Head>
        <Wrapper>
            <div className={classes.inner}>
              <TopContent/>
              <div className={classes.back}>
              <BackWardBtn title={"Туры"}/>
              </div>
              <div className={classes.content}>
                <FilterBlock/>
                <div className={classes.content_tours}>{data.map(item=> <Card key={item.id} item={item}/>)}</div>
              </div>
            </div>
        </Wrapper>
    </>
  )
}

export default tour