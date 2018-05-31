import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {requestPokemon} from './actions/pokemon_actions.js';


document.addEventListener('DOMContentLoaded', ()=>{
  const rootEl = document.getElementById('root');
  window.requestPokemon = requestPokemon;
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
