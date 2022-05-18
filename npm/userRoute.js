// const userRouter = express.Router();
// const postRouter = express.Router();

// const router = require('express').Router();

const express = require('express')
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('I am logged in');
})
router.get('/logout', (req, res) => {
    res.send('I am logout');
})

module.exports = router