import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useSortPeople = (key, value) => {
   const { data: peopleData } = useSelector((state) => state.people);
   const memoizedPeopleArr = useMemo(() => {
      const arrPeople = []
      if (peopleData) {
         for (const item of peopleData) {
            if (item[key] === value) {
               arrPeople.push(item)
            }
         }

         return arrPeople
      }

   }, [value])

   return memoizedPeopleArr
}