const express = require('express'),
    router = express.Router(),
    userRouter = require('./user.router')
    categoryRouter = require('./category.router')

router.use('/user', userRouter);
router.use('/category', categoryRouter);

module.exports = router