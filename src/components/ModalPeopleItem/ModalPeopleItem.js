import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import closeIcon from "../../assets/images/closeIcon.png"
import iconHermaphrodite from "../../assets/images/icon-nogender.png"
import iconMale from "../../assets/images/icon-male.png"
import iconFemale from "../../assets/images/icon-female.png"
import { useEffect, useMemo } from 'react'
import Loader from '../Loader'
import { getPerson } from '../../services/api/apiPersonSlice'

import './ModalPeopleItem.sass'



Modal.setAppElement('#wrapper')


const ModalPeopleItem = () => {
   const { data: person, loading } = useSelector((state) => state.person);
   const { currentLang } = useSelector((state) => state.people);
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { personId } = useParams()
   const noValueArr = ['n/a', 'unknown', 'none', 'wh/ra', 'huwhorwhooohwh', 'whoowhwo']
   useEffect(() => {
      dispatch(getPerson({ currentLang, personId }))
   }, [])

   const goToBackHandler = () => {
      navigate(`./..`)
   }

   const imgGender = useMemo(() => {
      let gender = ''
      if (person.gender === 'male' || person.gender === 'scraanwo') {
         gender = iconMale
      } else if (person.gender === 'female' || person.gender === 'wwwoscraanwo') {
         gender = iconFemale
      }
      else if (person.gender === 'hermaphrodite' || person.gender === 'acworcscraakacrcoowaahaowo') {
         gender = iconHermaphrodite
      } else {
         return
      }

      return gender
   })

   const colorGender = useMemo(() => {
      let gender = ''
      if (person.gender === 'male' || person.gender === 'scraanwo') {
         gender = 'gender_green'
      } else if (person.gender === 'female' || person.gender === 'wwwoscraanwo') {
         gender = 'gender_purple'
      }
      else if (person.gender === 'hermaphrodite' || person.gender === 'acworcscraakacrcoowaahaowo') {
         gender = 'gender_yellow'
      } else {
         return
      }

      return gender
   })

   return (
      <>
         {loading && <Loader />}
         {!loading && <Modal
            isOpen
            onRequestClose={goToBackHandler}
            className="modal"
            contentLabel="Example Modal"
         >
            <button
               className='modal__close-btn'
               onClick={goToBackHandler}
            >
               <img src={closeIcon} alt="img-close-modal" className="image" />
            </button>
            <div className='modal-person'>
               <div className='modal-person__icon'>
                  {imgGender && <img src={imgGender} alt="img-gender" className='image' />}
                  <div className='modal-person__gender-birthyear'>
                     {(!noValueArr.includes(person.gender)) &&
                        (
                           <div className={`people__gender ${colorGender}`}>{person.gender}</div>
                        )}
                     {(!noValueArr.includes(person.birth_year)) &&
                        (
                           <div className="people__birthyear">{person.birth_year}</div>
                        )}
                  </div>
               </div>
               <div className='modal-person__characters'>
                  <div className='modal-person__name'>{person.name}</div>
                  <div className='modal-person__colors'>
                     {(!noValueArr.includes(person.hair_color)) &&
                        (
                           <div className='modal-person__color'>
                              {(currentLang === 'en') ? 'hair color: ' : 'acraahrc oaooanoorc: '}
                              {person.hair_color}
                           </div>
                        )}
                     {(!noValueArr.includes(person.skin_color)) &&
                        (
                           <div className='modal-person__color'>
                              {(currentLang === 'en') ? 'skin color: ' : 'scrcorahwh oaooanoorcacc: '}
                              {person.skin_color}
                           </div>
                        )}
                     {(!noValueArr.includes(person.eye_color)) &&
                        (
                           <div className='modal-person__color'>
                              {(currentLang === 'en') ? 'eye color: ' : 'worowo oaooanoorc: '}
                              {person.eye_color}
                           </div>
                        )}
                  </div>
                  <div className='modal-person__height-mass'>
                     {(!noValueArr.includes(person.height)) &&
                        (
                           <div className='modal-person__height'>
                              <div className="modal-person__circle">{person.height}</div>
                              <div className="modal-person__text">
                                 {(currentLang === 'en') ? 'height' : 'acwoahrracao'}
                              </div>
                           </div>
                        )}
                     {(!noValueArr.includes(person.mass)) &&
                        (
                           <div className='modal-person__mass'>
                              <div className="modal-person__circle">{person.mass}</div>
                              <div className="modal-person__text">
                                 {(currentLang === 'en') ? 'mass' : 'scracc'}
                              </div>
                           </div>
                        )}
                  </div>

               </div>
            </div>
         </Modal>}
      </>

   )

}
export default ModalPeopleItem