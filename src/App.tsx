import React from "react";
import "./App.css";
import Order from "./componets/Order/Order";
import { Layout } from "antd";
import Logo from "./componets/common/Logo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./componets/Dashboard/Dashboard";
import Welcome from "./componets/common/Welcome";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { showMenuSelector } from "./componets/Store/selectors/orderSelector";
import { AppStateType } from "./componets/Store/store";
import { showSideBar } from "./componets/Store/redusers/orederReducer";

const { Header, Sider, Content } = Layout;

function App() {
  const showMenu = useSelector((state: AppStateType) =>
    showMenuSelector(state)
  );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Layout>
        <Router>
          <Header>
            <Link to="/" className="logo">
              <Logo />
            </Link>
            <div className="header__bg"></div>
            <MenuOutlined
              className="btn-mobile"
              onClick={() => dispatch(showSideBar())}
            />
          </Header>
          <Layout>
            <Sider className={showMenu ? "show-sidebar" : "ant-layout-sider"}>
              <ul className="sidebar__list">
                <li
                  className="sidebar__list-item"
                  onClick={() => dispatch(showSideBar())}
                >
                  <Link to="/order" className="sidebar__list-link">
                    Orders
                  </Link>
                </li>
                <li
                  className="sidebar__list-item"
                  onClick={() => dispatch(showSideBar())}
                >
                  <Link to="/dashboard" className="sidebar__list-link">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </Sider>

            <Content>
              {" "}
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
