import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const inputUsername = "username"
  const inputPassword = "password"
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleChange = (e) => {
    if (e.target.id === inputUsername) {
      setUsername(e.target.value);
    }
    else if (e.target.id === inputPassword) {
      setPassword(e.target.value);
    }
  }
  const handleSubmit = () => {
    fetch('/login', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      body: `username=${username}&password=${password}`})
        .then(() => { setMsg('login Success') })
        .catch((err) => { console.error(err) });
  }
  const handleSignOut = () => {
    fetch('/logout');
  }
  const handleCheck = () => {
    fetch('/api/admin/you').then((res) => res.json()).then((data) => console.log(data))
  }
  const handleListClick = () => {
    fetch('/api/app/authors').then((res) => res.json()).then((data) => console.log(data))
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <label htmlFor={inputUsername}>ID</label>
        <input type="text" id={inputUsername} name={inputUsername} value={username} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor={inputPassword}>Password</label>
        <input type="password" id={inputPassword} name={inputPassword} value={password} onChange={handleChange}/>
      </div>
      <div>
        <button onClick={handleSubmit}>Sign in</button>
        <button onClick={handleSignOut}>Sign out</button>
        <button onClick={handleCheck}>Check</button>
      </div>

      <div>
        <p>{msg}</p>
        {msg !== '' &&
        <button onClick={handleListClick}>Get List</button>
        }
      </div>
    </div>
  );
}

export default App;
