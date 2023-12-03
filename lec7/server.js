const http=require('http');
const port=3001;
const hostname='127.0.0.1'

const myServer=http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'});
    res.end("<h1>hello i am your first server</h1>");
});

myServer.listen(port,hostname,()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);
})