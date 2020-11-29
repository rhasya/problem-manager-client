import Login from './auth/Login'
import Main from './Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import ProvideAuth from './auth/ProvideAuth';
import PrivateRoute from './auth/PrivateRoute'

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Redirect to={{ pathname: '/main' }}/>
        <Switch>
          <PrivateRoute path="/main">
            <Main/>
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App;