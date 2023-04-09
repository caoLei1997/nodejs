const fs = require('fs');
const koa = require('koa');
const app = new koa();

app.use(ctx => {
    if (ctx.path == '/good') {
        return ctx.body = 'good page'
    }
    fs.readFile('somefile.text', function (err, data) {
        if (err) throw err;
        ctx.body = 'hello koa'
    })
})

process.on('uncaughtException',function(err){
    console.log(err)
})

app.listen(3000)