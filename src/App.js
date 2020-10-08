import React, { useEffect, useState } from "react";
import { Admin } from "./Admin";
import Navigation from "./components/Navigation/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { useSelector, useDispatch } from "react-redux";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import { Footer } from "./components/Footer";
import { Terms } from "./pages/Terms";
import { Profiles } from "./pages/Profiles";
import { logoutUser } from "./store/auth/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
  const [user, setUser] = useState(false);
  const authAcc = useSelector((store) => store.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(authAcc).length > 0) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [authAcc, user]);

  const changeIsLogin = (isLogin) => {
    localStorage.removeItem("user");
    dispatch(logoutUser());
    setUser(isLogin);
  };

  return (
    <div className="wrapper">
      <Container fluid className="main-container">
        <Row>
          <Col lg="12" className="top_menu">
            <Navigation isAuth={user} changeIsLogin={changeIsLogin} />
          </Col>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute path="/admin" component={Admin} authed={user} />
          </Switch>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};
