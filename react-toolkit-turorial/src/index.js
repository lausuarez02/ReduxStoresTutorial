import ReactDOM from 'react-dom';
import React from 'react';
//redux
import { store } from './store/store'
import { Provider } from 'react-redux'

const App = () => {
 return <h1>This is my React app!</h1>;
 }
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('app'));