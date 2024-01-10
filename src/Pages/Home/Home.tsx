import React from 'react'
import Carousel from './Carousel'
import ExploreCategories from './ExploreCategories'
import NftBanner from './NftBanner'
import Card from "../../Components/ContributorCard"
import Contributor from './Contributor'

const Home = () => {
  return (
    <>
    <Carousel />
    <ExploreCategories/>
    <NftBanner/>
    <Contributor/>
    <Card/>
    </>
  )
}

export default Home