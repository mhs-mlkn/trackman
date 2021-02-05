import {
  AppBar as MuiAppBar,
  Link,
  makeStyles,
  Toolbar
} from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import UserButton from "./UserButton";
import LogoSVG from "assets/svg/logo.svg";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#FFFFFF"
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  logo: {
    position: "absolute",
    width: 200,
    height: 31,
    left: "calc(50% - 200px/2)",
    top: "calc(50% - 31px/2 + 1.5px)"
  },
  avatar: {
    position: "absolute",
    width: 40,
    height: 40,
    right: 32,
    top: "calc(50% - 40px/2)"
  },
  active: {
    color: theme.palette.secondary.main
  }
}));

export default function AppBar() {
  const classes = useStyles();

  return (
    <MuiAppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <nav style={{ flexGrow: 1 }}>
          <Link
            variant="button"
            color="textPrimary"
            to="/"
            className={classes.link}
            component={RouterLink}
            activeClassName={classes.active}
            exact
          >
            Home
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            to="/facility"
            className={classes.link}
            component={RouterLink}
            activeClassName={classes.active}
          >
            Facility
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            to="/admin"
            className={classes.link}
            component={RouterLink}
            activeClassName={classes.active}
          >
            Admin
          </Link>
          <Link
            variant="button"
            color="textPrimary"
            to="/tournaments"
            className={classes.link}
            component={RouterLink}
            activeClassName={classes.active}
          >
            My tournaments
          </Link>
        </nav>
        <img src={LogoSVG} alt="" className={classes.logo} />
        <UserButton />
      </Toolbar>
    </MuiAppBar>
  );
}
