import { Button, Card, CardActions, CardContent, Container, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react'

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

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="xs" className={classes.root}>
      <Card className={classes.loginBox}>
        <CardContent>
          <Typography variant="h5">Sign in</Typography>
          <TextField id="username" label="Username" variant="outlined" className={classes.inputBox}/>
          <TextField id="password" label="Password" variant="outlined" type="password" className={classes.inputBox} autoComplete="off"/>
        </CardContent>
        <CardActions className={classes.loginBoxBtnArea}>
          <Button variant="contained" color="primary">Sign in</Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default App;