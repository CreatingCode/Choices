/**
 * Created by ibarron on 12/30/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('menu',
        {
            title: 'Menu',
            menuType: 'sticky'
        });
});

module.exports = router;