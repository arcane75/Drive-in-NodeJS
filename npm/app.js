// const express = require('express')
// ReferenceError: require is not defined in ES module scope, you can use import instead

// import express from 'express';
// import morgan from 'morgan';
// import router from './router.js'

const express = require('express')
const morgan = require('morgan')
const useRouter = require('./userRoute')
const postRouter = require('./postRoute')
const {
    getAllPost,

} = require('./postController')
// console.log(express);
const app = express();

// app.use(morgan()); //globally use
const port = process.env.PORT || 5000;



app.use('/user', useRouter);




// function customMiddleware(req, res, next) {
//     console.log('I am custom middleware');
//     next(); //error thakle eikhane provide korbo

//     // if(req.url === '/help'){
//     //     res.send('sorry')
//     // }
// }

// function tinyLogger() {
//     return (req, res, next) => {
//         console.log(`${req.method} - ${req.url}`);
//         next();
//     }
// }
// const middleware = [customMiddleware, tinyLogger()]
// app.use(middleware);



// app.get('/about', morgan(), (req, res) => {
//     res.send('I am about');
// });



//apply file controller
app.get('/post',getAllPost);









app.get('/', (req, res) => {
    res.send('server is running');
});
app.get('*', (req, res) => {
    res.send('You are visit a wrong path');
});
app.listen(port, () => {
    console.log('Server running at port', port);
})