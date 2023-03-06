import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useSortColors = () => {
   const { data: peopleData } = useSelector((state) => state.people);
   const memoizedColorArr = useMemo(() => {
      const arrColors = ['All']
      if (peopleData) {
         for (const item of peopleData) {
            if (!arrColors.includes(item.eye_color)) {
               arrColors.push(item.eye_color)
            }
         }

         return arrColors
      }

   }, [peopleData])

   return memoizedColorArr
}