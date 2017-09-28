let express = require('express');
let app = express();
app.get('/users', function (req, res) {
  res.header('Access-Control-Allow-Origin','*');
  setTimeout(function(){
    res.send([
      {id: 1, name: 'zfpx1'},
      {id: 2, name: 'zfpx2'},
      {id: 3, name: 'zfpx3'}
    ]);
  },3000)
});
app.listen(3000);