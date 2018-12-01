const express = require('express');
const router = express.Router();
 
router.get('/', (req, res,next) => {
  res.status(200),json({
      message: 'get request is /products'
  });
});

router.post('/', (req, res,next) => {
  res.status(200),json({
      message: 'post request is /products'
  });
});



module.exports = router;