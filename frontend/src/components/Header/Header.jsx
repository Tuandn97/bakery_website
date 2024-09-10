import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <div className="header-contents-left">
                <h2>Slice into Joy, One Cake at a Time!</h2>
                <p>Welcome to our bakery, where each bite is a celebration. From classic favorites to innovative flavors, our cakes are made with love and the finest ingredients, ensuring a delightful experience for everyone.</p>
                <button>Order now</button>
            </div>
            <img src={assets.header_img} alt="Mooncake" />
            
        </div>
      
    </div>
  )
}

export default Header
