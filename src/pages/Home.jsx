import React from 'react'
import InfoSections from '../Components/InfoSection'
import FeaturedRoommates from '../Components/FeaturedRoommates'
import BannerSlider from '../Components/BannerSlider'
export const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedRoommates ></FeaturedRoommates>
      <InfoSections />
    </div>
  )
}
