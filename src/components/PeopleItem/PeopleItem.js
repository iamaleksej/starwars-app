import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const PeopleItem = React.forwardRef(({ item, currentLang }, ref) => {
   const navigate = useNavigate()
   const idRegEx = /\/([0-9]*)\/$/
   const personId = item.url.match(idRegEx)

   const noValueArr = ['n/a', 'unknown', 'none', 'wh/ra', 'huwhorwhooohwh', 'whoowhwo']

   const navigateHandler = () => {
      navigate(`./${personId[1]}`)
   }

   const colorGender = useMemo(() => {
      let gender = ''
      if (item.gender === 'male' || item.gender === 'scraanwo') {
         gender = 'gender_green'
      } else if (item.gender === 'female' || item.gender === 'wwwoscraanwo') {
         gender = 'gender_purple'
      }
      else if (item.gender === 'hermaphrodite' || item.gender === 'acworcscraakacrcoowaahaowo') {
         gender = 'gender_yellow'
      } else {
         return
      }

      return gender
   })

   const peopleBody = (
      <>
         <h3 className="people__name">{item.name}</h3>
         <div className="people__height-mass-wrap">
            {(!noValueArr.includes(item.height)) &&
               (
                  <div className="people__height">
                     <div className="people__circle">{item.height}</div>
                     <div className="people__text">
                        {(currentLang === 'en') ? 'height' : 'acwoahrracao'}
                     </div>
                  </div>
               )}
            {(!noValueArr.includes(item.mass)) &&
               (
                  <div className="people__mass">
                     <div className="people__circle">{item.mass}</div>
                     <div className="people__text">
                        {(currentLang === 'en') ? 'mass' : 'scracc'}
                     </div>
                  </div>
               )}
         </div>
         <div className="people__bottom-info">
            {(!noValueArr.includes(item.gender)) &&
               <div className={`people__gender ${colorGender}`}>{item.gender}</div>
            }
            {(!noValueArr.includes(item.birth_year)) &&
               <div className="people__birthyear">{item.birth_year}</div>
            }
         </div>
      </>
   )

   return (
      ref
         ? <div
            className="people__item"
            ref={ref}
            onClick={navigateHandler}
         >{peopleBody}</div >
         : <div
            className="people__item"
            onClick={navigateHandler}
         >
            {peopleBody}
         </div >
   )
})

export default PeopleItem