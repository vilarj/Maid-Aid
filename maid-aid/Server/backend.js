var express = require('express');
var route = express.Route();

/*GET users listing*/
route.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "somebody"},
    {id: 2, username: "somebody_else"}
  ]);
});

/* PORT: 5432 */
