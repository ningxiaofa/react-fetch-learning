const express = require("express");
const app = express();
const router = require("./router");

app.use(router);

app.listen(3100, function(){
    console.log("Sever running at port 3100");
});

// Note:
// 1.每次修改代码都是要重新启动 node server的, 有解决方案, TBD. 详见 express / koa 均可
