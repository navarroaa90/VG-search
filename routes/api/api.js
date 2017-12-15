var express = require('express');
var router = express.Router();
var apiCtrl = require('../../controllers/apiController');


/*---- protected routes ----*/
// router.post('/', checkAuth, apiCtrl.getCharacterData);
router.post('/', apiCtrl.getCharacterData);





/*---- helper method----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }
  
  module.exports = router;