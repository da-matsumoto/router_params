import React from 'react'
import ReactDOM from 'react-dom'
import CustomerApp from './CustomerApp'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<CustomerApp />, document.getElementById('root'));
registerServiceWorker();
