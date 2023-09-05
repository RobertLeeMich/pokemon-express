const React = require("react");

class Show extends React.Component {
  render() {
    const {pokemon} = this.props
    const ext = ".jpg"
    return (
      <div>
        <h1> Gotta Catch 'Em All</h1>
        <img src = {`${pokemon.img}${ext}`} alt = {pokemon.name} />
        <h1><a href = "/pokemon">Back</a></h1>
      </div>
    );
  }
}

module.exports = Show