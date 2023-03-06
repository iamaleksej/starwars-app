import { useEffect, useRef, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../../services/api/apiPeopleSlice'
import { useSortColors } from "../../../hooks/useSortColors";
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { useSortPeople } from '../../../hooks/useSortPeople';
import PeopleItem from '../../PeopleItem';
import { Route, Routes } from 'react-router-dom';
import ModalPeopleItem from '../../ModalPeopleItem/ModalPeopleItem';
import Loader from '../../Loader';
import { clearData } from '../../../actions/actionClearPeople';

import './PeoplePage.sass'
import imgTranslate from '../../../assets/images/imgTranslate.png'
import CheckId from '../../CheckId/CheckId';
import { changeLanguage } from '../../../actions/actionLanguage';


const PeoplePage = () => {
   const { data: peopleData, loading, totalCount, hasNextPage, currentLang } = useSelector((state) => state.people);

   const dispatch = useDispatch()
   const [isOpenFilterList, setOpenFilterList] = useState(false)
   const [currentEyeColor, setCurrentEyeColor] = useState('All')
   const [currentPage, setCurrentPage] = useState(1)

   useEffect(() => {
      dispatch(clearData([]))
   }, [])

   const intObserver = useRef()
   const lastPeopleItemRef = useCallback(item => {
      if (loading) return

      if (intObserver.current) {
         intObserver.current.disconnect()
      }

      intObserver.current = new IntersectionObserver(items => {
         if (items[0].isIntersecting && hasNextPage && currentEyeColor === 'All') {
            setCurrentPage(prev => prev + 1)
         }
      })

      if (item) {
         intObserver.current.observe(item)
      }
   }, [loading, hasNextPage])

   useEffect(() => {

      const controller = new AbortController()
      const { signal } = controller

      if (currentEyeColor === 'All') {
         if (currentLang === 'wo' && currentPage < 4) {
            dispatch(getPeople({ currentLang, currentPage, options: { signal } }))
         } else if (currentLang === 'en') {
            dispatch(getPeople({ currentLang, currentPage, options: { signal } }))
         }
      }

      return () => controller.abort()

   }, [currentPage, currentLang])


   const popupFilterRef = useRef(null)
   const onClosePopupFilter = () => {
      setOpenFilterList(false)
   }

   useOutsideClick(popupFilterRef, onClosePopupFilter, isOpenFilterList);

   const sortedColors = useSortColors()

   const sortedPeopleByEyes = useSortPeople('eye_color', currentEyeColor)
   const currentPeopleData = currentEyeColor === 'All' ? peopleData : sortedPeopleByEyes

   const onTranslate = () => {
      (currentLang === 'en')
         ? dispatch(changeLanguage('wo'))
         : dispatch(changeLanguage('en'))

      dispatch(clearData([]))
      setCurrentPage(1)
   }

   const arrowStyle = isOpenFilterList ? 'down-arrow rotate' : 'down-arrow'

   return (
      <>
         <Routes>
            <Route element={<CheckId />}>
               <Route path="/:personId" element={<ModalPeopleItem />} />
            </Route>
         </Routes>
         <div className="people-wrapper">
            <div className="container relative">
               <p className='language'>language: {currentLang}</p>
               {currentLang === 'en'
                  ?
                  (<h1 className="title">
                     <span className='fw700'>{totalCount} Peoples</span> for you to choose your favorite
                  </h1>)
                  :
                  (<h1 className="title">
                     <span className='fw700'>{totalCount} </span> rcwochuanaoc
                  </h1>)}
               <div className="filter">
                  <p className="filter__title">
                     {(currentLang === 'en') ? 'color eye' : 'oaooanoorc worowo'}
                  </p>
                  <div className="filter-list-wrapper">
                     <div
                        className="filter-list-selected"
                        onClick={() => setOpenFilterList(!isOpenFilterList)}
                        ref={popupFilterRef}
                     >
                        <p className='x-y_center'>{currentEyeColor}</p>
                        <div className={arrowStyle}></div>
                     </div>
                     {isOpenFilterList && (
                        <>
                           {!loading && (
                              <div className="filter-list">
                                 {
                                    sortedColors.map((color, i) => {
                                       return (
                                          <div
                                             key={color + i}
                                             className="filter-list__item"
                                             onClick={(e) => setCurrentEyeColor(e.target.innerText)}
                                          >
                                             {color}
                                          </div>
                                       )
                                    })
                                 }
                              </div>
                           )}
                        </>
                     )}

                  </div>
               </div>
               {loading && <Loader />}

               <div className="people">
                  {
                     currentPeopleData.map((item, i) => {
                        if (currentPeopleData.length === i + 1) {
                           return (
                              <PeopleItem
                                 ref={lastPeopleItemRef}
                                 key={item.name + i}
                                 item={item}
                                 currentLang={currentLang}
                              />
                           )

                        }
                        return <PeopleItem key={item.name + i} item={item} />
                     })
                  }
               </div>
            </div>
         </div>
         <div className='translate-wrapper'>
            <div className='container relative'>
               <div
                  className='translate'
                  onClick={onTranslate}
               >
                  <img src={imgTranslate} alt="image-translate" className='image' />
               </div>
            </div>
         </div>
      </>
   )
}

export default PeoplePage