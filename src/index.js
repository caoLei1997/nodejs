const fs = require('fs');
const koa = require('koa');
const app = new koa();


app.use(ctx => {
    fs.readFile('somefile.text', function (err, data) {
        if (err) throw err;
        ctx.body = 'hello koa'
    })
})
app.listen(3000)