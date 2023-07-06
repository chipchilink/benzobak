import * as React from 'react'
import cn from 'classnames'
import { NavBar } from './components/GlobalNavBar'
import { State } from './state'
import 'normalize.css'
import '../font/roboto.css';
import './globals.css'
import style from './layout.module.scss'

import { index, IndexRoute, Router, Routers, Link } from './Route';
import * as route from './routers';

import Events from './events/[day]/page';
import EventsL from './events/layout';

import Leaderboard from './sport/[day]/leaderboard/page';
import Schedule from './sport/[day]/schedule/page';
import Summary from './sport/[day]/summary/page';
import Sport from './sport/layout';

import Medicine from './medicine/page';
import Fans from './fans/page';
import Navigation from './navigation/page';

import RFT from './(residence-food-transfer)/layout';
import Food from './(residence-food-transfer)/food/page';
import Residence from './(residence-food-transfer)/residence/page';
import Transfer from './(residence-food-transfer)/transfer/page';

import { Main } from './main';
import logo from './logo.png'

export default function () {
  return (
    <div className={cn(style.page)}>
      <i className={style.back} />
      <Routers>
        <State>
          <header className={style.head}>
            <Link to={index}>
              <img src={logo} alt="logo" width={197} height={158} />
            </Link>
          </header>
          <IndexRoute><Main /></IndexRoute>
          <Router path={route.events}><EventsL><Events /></EventsL></Router>
          <Router path={route.schedule}><Sport><Schedule /></Sport></Router>
          <Router path={route.leaderboard}><Sport><Leaderboard /></Sport></Router>
          <Router path={route.summary}><Sport><Summary /></Sport></Router>
          <Router path={route.medicine}><Medicine /></Router>
          <Router path={route.fans}><Fans /></Router>
          <Router path={route.navigation}><Navigation /></Router>
          <Router path={route.food}><RFT><Food /></RFT></Router>
          <Router path={route.residence}><RFT><Residence /></RFT></Router>
          <Router path={route.transfer}><RFT><Transfer /></RFT></Router>
          <NavBar />
        </State>
      </Routers>
    </div>
  )
}
