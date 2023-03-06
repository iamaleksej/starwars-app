import { useLocation, Navigate, Outlet, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const CheckId = () => {
   const { personId } = useParams()
   const { totalCount } = useSelector((state) => state.people);
   const location = useLocation()
   if (totalCount)
      return (
         (personId <= totalCount && personId > 0)
            ? <Outlet />
            : <Navigate to="/starwars-app/not-found" state={{ from: location }} replace />
      )
}

export default CheckId