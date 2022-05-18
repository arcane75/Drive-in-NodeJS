const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Render all posts')
})
router.get('/:postId', (req, res) => {
    res.send('I am post' + req.params.postId)
})

router.post('/', (req, res) => {
    res.send('Create new posts')
})

module.exports = router;