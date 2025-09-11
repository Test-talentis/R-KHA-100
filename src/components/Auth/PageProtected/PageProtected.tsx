import { useAppSelector } from '@store/hooks'
import React from 'react'
import { Navigate } from 'react-router-dom';

type TPageProtected = {
    children: React.ReactNode
}

function PageProtected({children}: TPageProtected) {
    const {accessToken} = useAppSelector(state => state.auth);
  return (
   <>
    {accessToken ? children : <Navigate to="/login?message=login_required" />}
   </>
  )
}

export default PageProtected