let fs = require('fs');
//阅读性强，但是性能非常差
/*let content = fs.readFileSync('./1.txt','utf8');
//可读性差，但是性能较好
fs.readFile('./1.txt','utf8',function(err,data){
  console.log(data);
})*/
function readFile(filename){
  return new Promise(function(resolve,reject){
    fs.readFile(filename+'1','utf8',function(err,data){
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    })
  });
}
//async await
async function read(){
  //如果方法里用到了await,那么需要在function前面加async关键字
 try{
   let content = await readFile('./1.txt');
   console.log(content);
 }catch(e){
   console.error(e);
 }
}
read();