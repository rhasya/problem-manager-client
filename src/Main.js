import { AppBar, Button, Container, Link, makeStyles, Toolbar } from "@material-ui/core"
import { useContext } from "react"
import { Link as RouterLink, Route, Switch, useHistory, useRouteMatch } from "react-router-dom"
import authContext from './auth/authContext'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
  titleBox: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row"
  },
  title: {
    color: "white"
  },
  space: {
    width: "40px"
  }
}))

function Main2() {
  const classes = useStyles()
  const auth = useContext(authContext)
  const hist = useHistory()
  const { path, url } = useRouteMatch()

  const signOut = () => {
    fetch('/logout').then((res) => {
      if (res.ok) {
        localStorage.removeItem('username')
        auth.setUsername(null)
        hist.push('/login')
      }
    })
  }

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.titleBox}>
            <Link className={classes.title} variant="h6" underline="none" component={RouterLink} to={`${url}`}>Problem Manager</Link>
            <div className={classes.space}></div>
            <Button color="inherit" component={RouterLink} to={`${url}/menu1`}>Menu1</Button>
            <Button color="inherit">Menu2</Button>
            <Button color="inherit">Menu3</Button>
          </div>
          <Button color="inherit" onClick={signOut}>Sign Out</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path={path}>
            Test
          </Route>
          <Route path={`${path}/menu1`}>
            Menu1
          </Route>
        </Switch>
      </Container>
    </div>
  )
}

export default Main2