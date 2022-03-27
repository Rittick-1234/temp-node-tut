const http=require('http');

const server=http.createServer((req,res)=>{
   if(req.url=='/'){
    // res.write('Welcome to our home page')
    res.end('Welcome to our home page');
   }
   if(req.url=='/about'){
       res.end('here is short data');
   }
    res.end(`
        <h1>OOPs!</h1>
        <p>We can't seem to find the page you are lookin for</p>
        <a href="/">back home</a>
    `)
})

server.listen(4000)