let express = require('express');
let app = express();
app.get('/users', function (req, res) {
  res.header('Access-Control-Allow-Origin','*');
  if(Math.random()>0.5){
    setTimeout(function(){
      res.send([
        {id: 1, name: 'zfpx1'},
        {id: 2, name: 'zfpx2'},
        {id: 3, name: 'zfpx3'}
      ]);
    },3000)
  }else{
    res.status(500).send({"error":"失败"});
  }

});
app.listen(3000);