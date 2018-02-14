import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageList from '../components/PageList'
import '../styles/App.css'


const mapStatesToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
    },
  }
}

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
          <main className='main'>
            <Sidebar {...this.props} />
            <PageList />
          </main>
      </div>
    );
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(App);
