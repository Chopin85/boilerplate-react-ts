import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
// import Home from '../Home';
// import Login from '../Login';
import Demo from '../Demo';
import ApiDemo from 'views/ApiDemo/ApiDemo';

interface Props {
  className?: string;
}

const App = ({ className }: Props) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Router>
        <Switch>
          <Route path="/apidemo" component={ApiDemo} />
          <Route path="/demo" component={Demo} />
          <Route path="/" component={Header} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
