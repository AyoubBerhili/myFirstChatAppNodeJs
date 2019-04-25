const router = require('express').Router()

router.get('/', (req, res) => {
    res.end('Hello at main')
})

module.exports = router