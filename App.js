/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {} from 'react-native';

import First from './Screen/First';
import Todo from "./Screen/Todo"
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './Screen/store'
//import rootReducer  from './Screen/reducer/todo';

const initialState ={

}

// const reducer = (state = initialState,action) =>{
//   switch (action.type) {
    
//     default:
//       break;
//   }
//   return state;
// }

// const store = createStore(rootReducer);


export default class App extends React.Component{
  
  render(){
    return (
      <Provider store={store}>
        <Todo/>
      </Provider>
    );
  }
  
};




