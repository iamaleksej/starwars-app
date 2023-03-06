
import { Link } from 'react-router-dom'
import imgHomeBanner from '../../../assets/images/banner-home.png'
import './HomePage.sass'

const HomePage = () => {

   return (
      <div className="home-wrapper">
         <div className="container x-y_center">
            <div className="home">
               <div className="home__item home-text">
                  <h1 className="home-text__item home-text__large-text">
                     <span className="fw700">Find</span> all your
                     favorite <span className="fw700">character</span>
                  </h1>
                  <h2 className="home-text__item home-text__small-text">
                     You can find out all the <br />
                     information about your favorite characters
                  </h2>
                  <div className="home-text__item home-text__btn">
                     <Link to="/starwars-app/people">
                        See more...
                     </Link>
                  </div>
               </div>
               <div className="home__item home-banner">
                  <img src={imgHomeBanner} alt="yoda-banner" className="home-banner__image" />
               </div>
            </div>
         </div>
      </div>
   )
}
export default HomePage
