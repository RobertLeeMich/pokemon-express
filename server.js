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

//DISPLAYING POKEMON IN THE BROWSER IN JSON
//THIS LOOKS FOR THE /VIEWS FOLDER WHICH IS SET BY APP.SET ABOVE, LOOKS FOR THE INDEX FILE, AND THEN PULLS THE POKEMON : POKEMON VIA KEY/VALUE PAIR THAT ARE INSIDE THE FILE
app.get("/pokemon", (req, res) => {
    res.render("Index", { pokemon: pokemon })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
