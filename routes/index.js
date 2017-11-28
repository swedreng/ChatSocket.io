var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/girisyap', function(req, res, next) {
  res.setHeader('Cache-Control', 'private, max-age=0, no-cache, no-store');
  res.render('girisyap', { title: 'Express' });

});
router.get('/uyeol', function(req, res, next) {
  res.render('uyeol', { title: 'Express' });
});
module.exports = router;
