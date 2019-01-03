import React from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import './styles.scss';
import Auth from "components/Auth";
import Footer from "components/Footer";
import Navigation from "components/Navigation";
import Feed from "components/Feed";
import Explore from "components/Explore";

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
    <Footer key={3} />
];

App.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const PrivateRoutes = props => (
    <Switch>
      <Route key="1" exact path="/" component={Feed} />,
      <Route key="2" path="/explore" component={Explore} />
    </Switch>
);
const PublicRoutes = props => (
    <Switch>
      <Route exact path="/" component={Auth} />,
      <Route path="/recover" render={() => "recover password"} />
    </Switch>
);

export default App;