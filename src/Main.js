import { useContext } from 'react'
import authContext from './auth/authContext'
import { Link as RouterLink, Route, useHistory } from 'react-router-dom'
import { Container, Typography, Link, Button } from '@material-ui/core'
import './Main.css'

function Main() {
  const auth = useContext(authContext)
  const history = useHistory()

  const signOut = () => {
    localStorage.removeItem('username')
    auth.setUsername(null)
    history.push('/login')
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo-box">
          <Link component={RouterLink} to='/main' className="logo">Problem Manager</Link>
        </div>
        <div className="menu-box">MENU</div>
        <div className="btn-box">
          <Button variant="contained">Sign Out</Button>
        </div>
      </nav>
      <Container>
        <Route>
          <Typography variant="h5">Main Page</Typography>
          <button onClick={signOut}>Sign Out</button>
        </Route>
      </Container>
    </div>
  )
}

export default Main