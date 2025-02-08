import React from 'react'
import GiftItems from '../components/GiftItems'
import Dates from '../components/Dates'
import Perfumes from '../components/Perfumes'
import Others from '../components/Others'
import Clothes from '../components/Clothes'
import Carousel from '../components/Carousel'
import Categories from '../components/categories'
import HomeMadeSnakes from '../components/HomeMadeSnakes'
import Crockery from '../components/Crockery'
import Watchs from '../components/Watchs'
import Mobiles from '../components/Mobiles'
import DryFruits from '../components/DryFruits'

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
        <HomeMadeSnakes />
        <Crockery />
        <Watchs />
        <Mobiles />
        <DryFruits />
    </div>
    </>
  )
}

export default HomePage