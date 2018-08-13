const json = require('koa-json')
const Koa = require('koa');

const app = new Koa();
app.use(json());
const PORT = 1337;

app.use(async(ctx) => {
    ctx.body = {
        message: 'hello, world!'
    };
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;