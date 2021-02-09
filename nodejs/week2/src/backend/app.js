// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const { request, response } = require("express");
const express = require("express");
const app = express();
const moviesRouter = require("./api/movies-router");

// This is where you want to create your is chrome browser middleware (second exercise)
app.use((request, response, next) => {
    // console.log(request.headers);
    if(request.headers["user-agent"]) {
        request.isChromeBrowser = request.headers["user-agent"].includes('Chrome');
        console.log(request.isChromeBrowser);
    }
    next();
})

// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);

module.exports = app;
