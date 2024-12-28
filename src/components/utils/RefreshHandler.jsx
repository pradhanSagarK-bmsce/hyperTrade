import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RefreshHandler = ( { setIsLoggedIn } ) => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            setIsLoggedIn(true);
            if(location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/landingpage'){
                navigate('/hyperTrade',{replace: false});
            }
        }
    },[location,navigate,setIsLoggedIn])

  return (
        null
  )
}

export default RefreshHandler