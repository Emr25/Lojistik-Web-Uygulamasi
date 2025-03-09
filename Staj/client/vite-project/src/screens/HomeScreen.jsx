import React from 'react'
import Header from '../components/Header'
import Scroll from '../components/Scroll'
import Hizmet from '../components/Hizmet'
import Tarih from '../components/Tarih'

const HomeScreen = () => {
  return (
    <div>
        <Header/>
        <Scroll/>
        <Hizmet/>
        <Tarih/>
    </div>
  )
}

export default HomeScreen