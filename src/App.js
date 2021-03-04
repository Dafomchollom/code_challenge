import { Container, makeStyles, CssBaseline } from "@material-ui/core";
import Index from "./pages/home";
import viewProfile from "./pages/viewProfile";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ background: "#302e43" }}>
          <CssBaseline />
          <Container maxWidth="md" style={{ padding: "0px" }}>
            <Switch>
              <Route
                path="/profile/:id"
                exact
                strict
                component={viewProfile}
              ></Route>
              <Route path="/" strict component={Index}></Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
