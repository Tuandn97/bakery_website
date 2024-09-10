import './Adbanner.css'
import { assets } from '../../assets/assets'
const Adbanner = () => {
  return (
    <div className='ad-banner'>
        <img src={assets.adbanner} alt="" />
        <div className="ad-banner-contents">
            <h2>Mooncake Festival Special</h2>
            <p>Enjoy 20% off all mooncakes for a limited time! Indulge in our delicious flavors and share the joy with loved ones.</p>
            <button>Shop Now</button>
        </div>
      
    </div>
  )
}

export default Adbanner
