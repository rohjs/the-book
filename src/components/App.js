import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import routeActions from '../lib/redux/route/action'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageList from '../components/PageList'
import '../styles/App.css'
class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
          <main className='main'>
            <Sidebar />
            <PageList />
          </main>
      </div>
    );
  }
}

export default App
