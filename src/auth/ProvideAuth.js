import { useState } from 'react'
import authContext from './authContext'

function useProvideAuth() {
  const [username, setUsername] = useState(localStorage.getItem('username'))
  return {
    username,
    setUsername
  }
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export default ProvideAuth