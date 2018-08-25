const express = require('express'),
    expressStatic = require('express-static'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs');
 let db = './user.json',
    port = 8080,
    app = express(),
    templateUrl = `${__dirname}/template`;

// 解析body数据
app.use(bodyParser.urlencoded({
    extended: true
}));

// 设置模板用ejs 以及模板路径为template下面
app.set(`view engine`, `ejs`);
app.set(`views`, templateUrl);

// 首页
app.get(`/`, (req, res)=>{
    res.render(`index.ejs`);
});
app.get(`/index`, (req, res)=>{
    res.render(`index.ejs`);
});

//设置静态文件地址
app.use(expressStatic(`${__dirname}/www`));

app.all(`*`, (req, res)=>{
    res.send(`sorry, 您访问的资源部存在`);
    // 跳转
    // res.redirect(`/index`);
});

app.listen(port, ()=>{
    console.log(`server is startd at ${port}`);
});