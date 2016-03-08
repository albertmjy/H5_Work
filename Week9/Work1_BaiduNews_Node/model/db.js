/**
 * Created by albert on 2/16/16.
 */

var mysql = require("mysql")

var config = {
    host: "localhost",
    database: "baidu_news",
    user: "root",
    password: ""
}

function query(sql, rstHandler){
    var connection = mysql.createConnection(config)
    connection.query(sql, (err, rows, fields) => {
        if (err) throw err;
        console.log(rows)
        rstHandler(rows)
    })
    connection.end()
}

function modifyPromise(sql, param){
    return new Promise(function(fulfill, reject){
        var connection = mysql.createConnection(config)
        connection.query(sql, param, (err, result) => {
            if (err) {
                console(err)
                reject (err)
            } else {
                console.log(result)
                fulfill(result)
            }
        })
        connection.end()
    })

}

exports.query = query
exports.modifyPromise = modifyPromise