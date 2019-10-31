const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + 'dist/grocery-angular'));
app.listen(process.env.PORT || 8080);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
});
// Start the app by listening on the default Heroku port

