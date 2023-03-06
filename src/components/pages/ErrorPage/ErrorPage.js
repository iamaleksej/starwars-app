import { useNavigate } from "react-router-dom"
import imgError from "../../../assets/images/imgError.png"
import './ErrorPage.sass'

const ErrorPage = () => {
   const navigate = useNavigate()

   const goToBackHandler = () => {
      navigate(`./..`)
   }

   return (
      <div className="error-page-wrapper">
         <div className="container">
            <div className="error-page">
               <p className="error-page__text">404</p>
               <img src={imgError} alt="img-error" className="error-page__image" />
               <button
                  className="error-page__btn"
                  onClick={goToBackHandler}
               >
                  Return
               </button>
            </div>
         </div>
      </div>
   )

}
export default ErrorPage