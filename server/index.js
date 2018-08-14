const json = require('koa-json')
const Koa = require('koa');
const cors = require('koa-cors');
const app = new Koa();

var options = {
    origin: '*'
};

app.use(cors(options));
app.use(json());
const PORT = 1337;

app.use(async(ctx) => {
    ctx.body = {
        "products": [
            { "Name": "Cheese", "Price": 2.50, "Location": "Refrigerated foods" },
            { "Name": "Crisps", "Price": 3, "Location": "the Snack isle" },
            { "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods" },
            { "Name": "Chocolate", "Price": 1.50, "Location": "the Snack isle" },
            { "Name": "Self-raising flour", "Price": 1.50, "Location": "Home baking" },
            { "Name": "Ground almonds", "Price": 3, "Location": "Home baking" },
        ]
    };
});

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;