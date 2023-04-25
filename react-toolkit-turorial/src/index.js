import { createRoot } from 'react-dom/client';
import React from 'react';
//redux
import { store } from './store/store'
import { Provider } from 'react-redux'
//component
import Counter from './components/Counter';

const App = () => {
 return (
    <React.Fragment>
    <Counter />
  </React.Fragment>
 );
 }
 const rootElement = document.getElementById("root");
 const root = createRoot(rootElement);
 
 root.render(
   <Provider store={store}>
     <App />
   </Provider>
 )