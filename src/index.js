import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const viewport = document.getElementsByClassName('card-profile')[0];
const app = document.createElement('div');
app.id = 'root';
if (viewport) viewport.append(app);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
