const http=require('http');

var options={
  hostname:'58.87.107.26',
  post:80,
  path:'/',
  method:'GET'
};

var req=http.request(options,res=>{
   console.log(res.status);
   console.log(JSON.stringify(res.headers));
   res.setEncoding('utf8');
   res.on('data',function(chunk){
       console.log(chunk)
   })
});

req.end();