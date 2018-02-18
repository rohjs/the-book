import React, { Component } from 'react'
import routeActions from '../lib/redux/route/action'
import Header from '../components/Header'
import Router from './Router'
import '../styles/App.css'


class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <main className='main'>
          <Router />
        </main>
      </div>
    );
  }
}

export default App
