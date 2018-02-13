import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './lib/redux/store'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

let main = document.getElementById('main')
if (main == null) {
  main = document.createElement('main')
  main.setAttribute('id', 'main')
  document.body.appendChild(main)
}

render(<Index />, main)

registerServiceWorker()
