const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

//INDEX
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

//DISPLAYING POKEMON LIST IN THE BROWSER IN JSON
//THIS LOOKS FOR THE /VIEWS FOLDER WHICH IS SET BY APP.SET ABOVE, LOOKS FOR THE INDEX FILE, AND THEN PULLS THE POKEMON : POKEMON VIA KEY/VALUE PAIR THAT ARE INSIDE THE FILE
app.get("/pokemon", (req, res) => {
    res.render("Index", { pokemon: pokemon })
})

//SHOW ROUTE
//SHOWS INDIVIDUAL POKEMON THROUGH LINKS OR URL
app.get("/pokemon/:id", (req, res) => {
    //req.params.id is a good test to make sure the data from the URL is being passed to the browser correctly, since it will display anything you type as the ID

    //error checking
    //if the id is greater than or equal to 0 (an index) and if it's less than pokemon.length
    if (req.params.id >= 0 && req.params.id < pokemon.length){
        res.render("Show", {pokemon: pokemon[req.params.id]})
    } else {
        res.status(404).send("Index does not exist!")
    }

    // res.render('Show', {
    //     //there will be a variable available inside the jsx file called pokemon, its value is pokemon[req.params.indexOfPokemonArray]
    //     pokemon: pokemon[req.params.id],
    //   });
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
