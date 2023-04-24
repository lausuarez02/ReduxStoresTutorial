import { createRoot } from 'react-dom/client';
import React from 'react';
//redux
import store from './store/store.js';
import { Provider,connect } from 'react-redux';
import { increment, decrement } from './reducers/actions.js';
//components
import Counter from './component/Counter.js'; 

const App = ({ count, increment, decrement }) => {
 return(
  <React.Fragment>
    <Counter count={count} increment={increment} decrement={decrement}/>
  </React.Fragment>
 )
 }

 const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)