const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('third router middleware');
  // try {
  //   throw new Error('ruin server');
  // } catch (e) {
  //   // next(error)를 하면 다음 미들웨어를 다 건너뛰고 에러처리 미들웨어로 이동
  //   next(e);
  // }
  res.render('test.pug', {
      title: 'EXPRESS',
      title2: '안녕',
      fruits: ['apple','pear','orange'],
  });
});

router.get('/posts', (req, res) => {

});

router.get('/comments', (req, res) => {

});

router.get('/list', (req, res) => {

});

router.post('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

router.put('/', (req, res) => {

});

module.exports = router;
