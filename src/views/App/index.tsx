import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
// import Home from '../Home';
// import Login from '../Login';
import Demo from '../Demo';
import ApiDemo from 'views/ApiDemo/ApiDemo';
import Menu from 'components/Menu';
import gsap from 'gsap';

interface Props {
  className?: string;
}

const App = ({ className }: Props) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const menuRef = useRef(null);

  const showMenu = () => {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.to(menuRef.current, { xPercent: 0, duration: 1 });
  };

  const hideMenu = () => {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    tl.to(menuRef.current, { xPercent: -100, duration: 1 });
  };

  useLayoutEffect(() => {
    var tl = gsap.timeline();
    tl.set(menuRef.current, { xPercent: -100 });
  }, []);

  useEffect(() => {
    if (!isOpen) hideMenu();
    else showMenu();
  }, [isOpen]);

  return (
    <div className={classNames(styles.root, className)}>
      <Router>
        <div onClick={() => setisOpen(true)} className={styles.menu} />
        <Menu
          ref={menuRef}
          className={styles.menuBar}
          onClick={() => setisOpen(false)}
        />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/apidemo" component={ApiDemo} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
