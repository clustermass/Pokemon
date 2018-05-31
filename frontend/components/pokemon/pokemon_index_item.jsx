import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <Link to={`/pokemon/${this.props.poke.id}`}>
        {this.props.poke.name}
        <img width = "50px" height = "50px" src={this.props.poke.image_url}/></Link>
      </li>
      );
  }


}


export default PokemonIndexItem;
