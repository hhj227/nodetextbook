const express = require('express');
const { User, Comment } = require('../models');
const router = express.Router();

router.get('/:id', (req, res, next) => {

});

router.patch('/:id', (req, res, next) => {

});

router.delete('/:id', (req, res, next) => {

});

// 왜 post만 아이디가 없을까
// get: 가져오다, patch: 수정하다, delete: 제거하다, post: 생성하다
router.post('/', (req, res, next) => {

});

module.exports = router;