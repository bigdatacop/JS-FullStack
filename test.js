// From Brad Schiff's Udemy Course - Git a Web Developer Job
let http = require("http")

let ourApp = http.createServer(function (req, res) {
    // add processing of the req url received using req object
    // log url subfolder requested
    // console.log(req.url)
    // check for '/' url request
    if (req.url == '/') {
        res.end("Hello and welcome to our home page")
    }
    // check for '/about' url request
    if (req.url == '/about') {
        res.end("Thank you for youra interest in our company.")
    }
    res.end("We cannot find the page you are looking for.")
})
ourApp.listen(3000)