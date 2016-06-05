module.exports = function (app, path, passport) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/views/index.html"));
    });

    // require('./absent.js', isLoggedIn)(app);


};
