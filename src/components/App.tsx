import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "pages/Home";
import Facility from "pages/Facilities";
import Admin from "pages/Admin";
import Tournaments from "pages/Tournaments";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#EC691A"
    },
    text: {
      primary: "#414141",
      secondary: "#A0A0A0"
    },
    background: {
      paper: "#FFFFFF",
      default: "#F8F9FA"
    }
  },
  typography: {
    fontFamily: "Oswald"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/facility" component={Facility} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/tournaments" component={Tournaments} />
          </Switch>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
