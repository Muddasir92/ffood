import React from 'react'
import '../appDownload/appDownload.css'
import { assets } from '../../assets/assets'

const appDownload = () => {
  return (
    <div className='appDownload' id='mobileApp'>
        <p>For Better Experience Download  <br /> Chicken Express App</p>
      <div className="app-plat-form">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default appDownload
