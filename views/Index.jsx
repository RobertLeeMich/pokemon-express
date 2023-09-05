const React = require("react");

class Index extends React.Component {
  render() {
    const {pokemon} = this.props
    return (
      <div>
        <h1> Pokemon Index Page </h1>
        <ul>
          {pokemon.map((poke, i) => {
            return (
              <li key="">
                <a href = {`/pokemon/${i}`}> {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} </a>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;

{/* <a href = {`/pokemon/${i}`}> {poke.img} </a> */}