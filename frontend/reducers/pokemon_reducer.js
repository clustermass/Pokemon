import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

 const pokemonReducer = ( state = {}, action ) => {
  switch (action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      const newPokemon = {[action.pokemon.id]: action.pokemon};
      return merge({}, state, newPokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
