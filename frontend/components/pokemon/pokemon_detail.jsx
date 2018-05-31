import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestPokemon(parseInt(this.props.match.params.id));
  }

  render() {


    const  { pokemon } = this.props;
    if (!pokemon) return <div></div>;

    return (

      <div>
        <img src={pokemon.image_url}/>
      </div>
    );
  }



}

export default PokemonDetail;
