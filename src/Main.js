import { useContext } from 'react'
import authContext from './auth/authContext'
import { useHistory } from 'react-router-dom'

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
      <h5>Main Page</h5>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default Main