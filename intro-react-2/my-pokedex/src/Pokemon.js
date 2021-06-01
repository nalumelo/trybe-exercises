import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
        <div className="Pokemon">
          <h3>{ name }</h3>
          <h4>{ type }</h4>
          <h4>{ `Average weight: ${ averageWeight.value } ${ averageWeight.measurementUnit }` }</h4>
          <img src={ image } alt={ `${ name } sprite` } />
        </div>
    );
  }
}

export default Pokemon;
