import './Specialities.css'
import { assets } from '../../assets/assets'
const Specialities = () => {
  return (
    <div className='specialities'>
        <div className="specialities-contents">
            <h2> Our Specialities</h2>
            <div className="specialities_card">
                <img src={assets.specialities_mooncake} alt="Moon Cake" />
                <div className="specialities_card_content">
                    <h3>Moon cake</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                    <button className='dark-bg-btn'>Order now</button>
                </div>
            </div>
            <div className="specialities_card">
                <div className="specialities_card_content">
                    <h3>Pie</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                    <button className='dark-bg-btn'>Order now</button>
                </div>
                <img src={assets.specialities_pie} alt="Pie" />
            </div><div className="specialities_card">
                <img src={assets.specialities_cookies} alt="Cookies" />
                <div className="specialities_card_content">
                    <h3>Moon cake</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                    <button className='dark-bg-btn'>Order now</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Specialities
