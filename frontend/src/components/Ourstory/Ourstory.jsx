import './Ourstory.css'
import { assets } from '../../assets/assets'
const Ourstory = () => {
  return (
    <div className='our-story'>
        <div className="our-story-contents">
            <h2>Our Stoty</h2>
            <p>At our bakery, every cake tells a story of passion and craftsmanship. Founded by a team of dedicated bakers, we believe that the best treats are made by hand, with love and attention to detail. Each cake is crafted from scratch, using the finest ingredients to create flavors that inspire joy and connection.</p>
            <p>Our journey began with a simple desire to bring happiness through baking.  As we experimented with traditional recipes and innovative techniques, we discovered the magic of handmade creations. Today, we invite you to experience our delicious cakes, where every slice is a testament to our commitment to quality and the joy of sharing sweet moments with family and friends.</p>
        </div>
        <img src={assets.ourstory_img} alt="The girl" />
    </div>
  )
}

export default Ourstory
