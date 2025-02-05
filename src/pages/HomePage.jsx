import React from 'react'
import GiftItems from '../components/GiftItems'
import Dates from '../components/Dates'
import Perfumes from '../components/Perfumes'
import Others from '../components/Others'
import Clothes from '../components/Clothes'
import Carousel from '../components/Carousel'
import Categories from '../components/categories'

const HomePage = () => {
  return (
    <>
    <div>
        <Categories/>
        <Carousel />
        <GiftItems />
        <Dates />
        <Perfumes />
        <Others />
        <Clothes />
    </div>
    </>
  )
}

export default HomePage