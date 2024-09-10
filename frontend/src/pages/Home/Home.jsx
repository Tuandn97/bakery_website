import Adbanner from '../../components/Adbanner/Adbanner'
import Header from '../../components/Header/Header'
import Ourstory from '../../components/Ourstory/Ourstory'
import Specialities from '../../components/Specialities/Specialities'

import './Home.css'
const Home = () => {
  return (
    <div>
        <Header/>
        <Ourstory/>
        <Adbanner/>
        <Specialities/> 
    </div>
  )
}

export default Home
