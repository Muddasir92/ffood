import "./AppDown.css"
import { assets } from '../../assets/assets'

const AppDown = () => {
  return (
    <div className='appDownload' id='mobileApp'>
        <p>For Better Experience Download  <br /> Food Corner App</p>
      <div className="app-plat-form">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDown
