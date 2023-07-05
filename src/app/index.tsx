import * as React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import cn from 'classnames'
import { NavBar } from './components/GlobalNavBar'
import { State } from './state'
import 'normalize.css'
import '../font/roboto.css';
import './globals.css'
import style from './layout.module.scss'

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
    <BrowserRouter basename={process.env.PUBLIC_URL ?? '/app'}>
      <div className={cn(style.page)}>
        <i className={style.back} />
        <State>
          <header className={style.head}>
            <Link to="/">
              <img src={logo} alt="logo" width={197} height={158} />
            </Link>
          </header>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/events/:day" element={<EventsL><Events /></EventsL>} />
            <Route path="/sport/:day/schedule" element={<Sport><Schedule /></Sport>} />
            <Route path="/sport/:day/leaderboard" element={<Sport><Leaderboard /></Sport>} />
            <Route path="/sport/:day/summary" element={<Sport><Summary /></Sport>} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/fans" element={<Fans />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/food" element={<RFT><Food /></RFT>} />
            <Route path="/residence" element={<RFT><Residence /></RFT>} />
            <Route path="/transfer" element={<RFT><Transfer /></RFT>} />
          </Routes>
          <NavBar />
        </State>
      </div>
    </BrowserRouter>
  )
}
