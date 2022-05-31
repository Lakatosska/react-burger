import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {

  const isAuth = localStorage.getItem('token');

  return (
    <Route {...rest} render={({ location }) => 
      isAuth ? ( 
        children
      ) : (
      <Redirect
     
      // переадресовываем на /login
      // в 'from' сохраним текущий маршрут (чтобы вернуть на него после login'a)
      // если state будет непустой, то юзер перенаправиться назад
        to={{
            pathname: '/login',
            state: { from: location }  
          }}
        />
      )
    }/>
  )
}