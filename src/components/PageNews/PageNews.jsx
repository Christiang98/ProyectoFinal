import React from 'react'
import Navbar from '../Navbar/Navbar'
import CardInternational from './CardInternational/CardInternational'
import CardLibertadores from './CardLibertadores/CardLibertadores'
import CardChampions from './CardChampions/CardChampions'
import CardLocal from './CardLocal/CardLocal'




export const PageNews = () => {
  return (
    <>
      <Navbar />
     <CardChampions/>
      <CardLibertadores/>
      <CardInternational/>
      <CardLocal/>
    </>
  )
}
export default PageNews
