import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Aboutpage from './Aboutpage';
import Dashboard from './Dashboard';
import Addpage from './Addpage';

const Header = props => {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              background: '#4040a7',
              listStyleType: 'none',
              color: 'white'
            }}
          >
            <li style={{ padding: 10, width: '4vw', textAlign: 'center' }}>
              <Link style={{ color: 'white' }} to="/">
                Home
              </Link>
            </li>
            <li style={{ padding: 10, width: '7vw', textAlign: 'center' }}>
              <Link
                style={{ color: 'white' }}
                to={
                  props.userDetails.username && props.userDetails.password
                    ? '/addpage'
                    : '/'
                }
              >
                Add Page
              </Link>
            </li>
            <li style={{ padding: 10, width: '7vw', textAlign: 'center' }}>
              <Link
                style={{ color: 'white' }}
                to={
                  props.userDetails.username && props.userDetails.password
                    ? '/aboutpage'
                    : '/'
                }
              >
                About Page
              </Link>
            </li>
            {props.userDetails.username && props.userDetails.password ? (
              <li
                style={{
                  padding: 10,
                  display: 'inline-block',
                  width: '98vw',
                  textAlign: 'right'
                }}
              >
                <a
                  href="#"
                  style={{ color: 'white' }}
                  onClick={() => {
                    localStorage.removeItem('userDetailsAssignment');
                    props.setUserDetails({});
                  }}
                >
                  Logout
                </a>
              </li>
            ) : (
              <li
                style={{
                  padding: 10,
                  display: 'inline-block',
                  width: '98vw',
                  textAlign: 'right'
                }}
              >
                <Link style={{ color: 'white' }} to="/">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/aboutpage">
            <Aboutpage />
          </Route>
          <Route path="/addpage">
            <Addpage {...props} />
          </Route>
          <Route path="/">
            {props.userDetails.username && props.userDetails.password ? (
              <Dashboard {...props} />
            ) : (
              <Login {...props} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Header;
