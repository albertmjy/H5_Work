/**
 * Created by albert on 2/15/16.
 */
var express = require("express");
var router = express.Router();

var newsModel = require("../model/news_model")


router.get('/:news_id', newsModel.getNews, (req, res, next) => {
    console.log(req.files)
    res.json(res.locals.news)
});

router.post('/upload/:news_id',newsModel.addNews, (req, res, next) => {
    console.log(req.files)
    console.log(__dirname)
    res.json(res.locals.message)
})

router.delete('/:news_id/:i', newsModel.deleteNews, (req, res, next) => {
    res.json(res.locals.message)
});


module.exports = router;
