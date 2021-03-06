import { connect } from 'react-redux';
import { requestPokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) =>({
  pokemon: state.entities.pokemon[ownProps.match.params.id],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({
  requestPokemon: (id) => dispatch(requestPokemon(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
