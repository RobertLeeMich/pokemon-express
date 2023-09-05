const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

app.get ("/")

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });