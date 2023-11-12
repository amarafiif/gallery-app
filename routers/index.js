const express = require('express'),
    router = express.Router(),
    userRouter = require('./user.router'),
    categoryRouter = require('./category.router'),
    articleRouter = require('./article.router');

const authenticate  = require('../middlewares/authenticated')

router.use('/user', userRouter);
router.use('/category', authenticate, categoryRouter);
router.use('/article', authenticate, articleRouter);

module.exports = router