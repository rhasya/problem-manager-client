import { Button, Card, CardActions, CardContent, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import authContext from './authContext'
import { Redirect, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  loginBox: {
    flexGrow: 1,
    marginTop: theme.spacing(40),
  },
  inputBox: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  loginBoxBtnArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}))

function Login() {
  const classes = useStyles();
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const auth = useContext(authContext)
  const history = useHistory()

  const handleChange = ({target}) => {
    if (target.id === 'username') {
      setUsername(target.value)
    }
    else if (target.id ==='password') {
      setPassword(target.value)
    }
  }
  
  const signIn = () => {
    fetch('/api/admin/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `username=${username}&password=${password}`
    }).then((response) => {
      if (response.ok) {
        console.log('success')
        // todo: save to localstorage and redirect
        fetch('/api/admin/you').then((res) => res.ok ? res.json() : new Error(res.statusText)).then((data) => {
            localStorage.setItem('username', data.username)
            auth.setUsername(data.username)
            history.push('/main')
        });
      }
      else {
        console.error(response.statusText);
      }
    })
  }

  if (auth.username) {
    return <Redirect to={{pathname: '/main'}}/>
  }
  else {
    return (
        <Container maxWidth="xs" className={classes.root}>
        <Card className={classes.loginBox}>
            <CardContent>
            <Typography variant="h5">Sign in</Typography>
            <TextField id="username" label="Username" variant="outlined" className={classes.inputBox} value={username} onChange={handleChange}/>
            <TextField id="password" label="Password" variant="outlined" type="password" className={classes.inputBox} value={password} onChange={handleChange}/>
            </CardContent>
            <CardActions className={classes.loginBoxBtnArea}>
            <Button variant="contained" color="primary" onClick={signIn}>Sign in</Button>
            </CardActions>
        </Card>
        </Container>
    )
  }
}

export default Login;