import { Login } from '@/presentation/login/login-view'
import { Navigate, useLocation } from 'react-router'


export function LoginOutLet () {
  const { isAuth } = {
    isAuth: true,
  }
  const location = useLocation()

  return (
    <>{
      !isAuth
        ? <Login/>
        : <Navigate to='/' state={{ from: location }} replace />
    }</>
  )
}