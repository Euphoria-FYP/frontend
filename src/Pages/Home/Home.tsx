import React from 'react'
import Carousel from './Carousel'
import NftBanner from './NftBanner'
import Card from "../../Components/ContributorCard"
import Contributor from './Contributor'

const Home = () => {
  return (
    <>
    <Carousel />
    <NftBanner/>
    <Contributor/>
    <Card/>
    </>
  )
}

export default Home