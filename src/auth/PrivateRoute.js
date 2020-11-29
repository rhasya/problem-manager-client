import { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import authContext from './authContext'

function PrivateRoute({ children, ...rest }) {
  const auth = useContext(authContext)
  
  console.log(auth.username)

  return (
    <Route {...rest} render={({location}) => 
      auth.username ? (children) :
        <Redirect to={{ pathname: '/login', state: { from: location }}}/>
    }>
    </Route>
  )
}
export default PrivateRoute