import { Redirect, Route } from 'react-router-dom';

export function ProtectedRoute({ children, ...rest }) {

  const isAuth = localStorage.getItem('token');

  return (
    <Route {...rest} render={({ location }) => 
      isAuth ? ( 
        children
      ) : (
      <Redirect
        to={{
            pathname: '/login',
            state: { from: location }  
          }}
        />
      )
    }/>
  )
}