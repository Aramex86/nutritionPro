import React from "react";
import "./App.css";
import Order from "./componets/Order/Order";
import { Layout } from "antd";
import Logo from "./componets/common/Logo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./componets/Dashboard/Dashboard";
import Welcome from "./componets/common/Welcome";

const { Header, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <Router>
            <Header>
              <Link to="/" className='logo'>
                <Logo />
              </Link>
              <div className="header__bg"></div>
            </Header>
            <Layout>
              <Sider>
                <ul className="sidebar__list">
                  <li className="sidebar__list-item">
                    <Link to="/order" className="sidebar__list-link">
                      Orders
                    </Link>
                  </li>
                  <li className="sidebar__list-item">
                    <Link to="/dashboard" className="sidebar__list-link">
                      Dashboard
                    </Link>
                  </li>
                </ul>
              </Sider>
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Layout>
          </Router>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
