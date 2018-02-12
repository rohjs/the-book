import React, { Component } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import NoteList from '../components/NoteList'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
          <main className='main'>
            <Sidebar />
            <NoteList />
          </main>
      </div>
    );
  }
}

export default App;
