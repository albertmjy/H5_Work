/**
 * Created by albert on 2/16/16.
 */

var fs = require("fs")
var db = require("./db")

const UPLOAD_ROOT = "/upload/"

//
// Insert news into table (news_id)
//
function addNews(req, res, next){
    var message = {db: null, file: null, err: null}
    var upFilePromise, dbPromise
    var src = []

    // save uploaded image
    upFilePromise = req.files.map(function(file){
        var origin = file.path
        var dest = UPLOAD_ROOT + file.originalname
        src.push(dest)

        return _moveFilePromise(origin, "public" + dest)
    })

    // save info into database
    switch (req.params.news_id){
        case "recommand":
        case "news":
        case "local":
        case "entertainment":
            var sql = "insert into " + req.params.news_id + " SET ?"
            sql = sql.replace("local", "local_news") // table name for local => local_news

            var param = {
                news_img: src.join(","),
                news_title: req.body.title,
                news_content: req.body.content,
                news_date: new Date().toISOString().substr(0, 10),
                news_label: req.body.label,
            }
            dbPromise = db.modifyPromise(sql, param)
            break
        case "image":
            var sql = "insert into " + req.params.news_id + " SET ?"
            var param = {
                news_img: src.join(","),
                news_title: req.body.title,
                news_like: Math.floor(Math.random() * 200) + 1,
            }
            dbPromise = db.modifyPromise(sql, param)
            break
        default:
            message.err = "No mathing news_id: " + req.params.news_id
    }

    // response message
    var promises = upFilePromise.concat(dbPromise)
    Promise.all(promises.reverse()).then(function(value){
        message.db = value[0].insertId
        message.file = "Success! " + value.slice(1).join(",")

        console.log(message);

        res.locals.message = message
        next()
    }, function(err){
        console.error(err)
        message.err = err
        res.locals.message = message
        next()
    })
    console.log(promises)
}

//
// select data from  table news_id
//
//function getNews(req, callback){
//    var sql = "select * from " + req.params.news_id;
//    sql = sql.replace("local", "local_news") // table name for local => local_news
//
//    db.query(sql, callback)
//}
function getNews(req, res, next){
    var sql = "select * from " + req.params.news_id;
    sql = sql.replace("local", "local_news") // table name for local => local_news
    db.query(sql, function(result){
        res.locals.news = result
        next()
    })
}

function deleteNews(req, res, next){
    var message = {err: null, msg: null}
    var sql = "delete from " + req.body.news_id + " where news_id='" + req.body.i + "'"
    db.modifyPromise(sql, {}).then(function(v){
        res.locals.message = v
        next()
    })

}

// move uploaded file
function _moveFilePromise(origin, dest){
    return new Promise(function(fulfill, reject) {
        fs.readFile(origin, function (err, data) {
            fs.writeFile(dest, data, function (err) {
                if (err) {
                    reject(err)
                    console.error(err)
                } else {
                    fulfill(dest)
                    console.log("file saved: " + dest)
                }
                fs.unlink(origin, function (err) {
                    if (err) {
                        console.warn(err)
                    }
                })
            })
        })
    })
}


exports.addNews = addNews
exports.getNews = getNews
exports.deleteNews = deleteNews