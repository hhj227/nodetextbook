const express = require('express');
const { User, Comment } = require('../models');
const router = express.Router();

router.get('/:id', (req, res, next) => {
    Comment.findAll()({
        include: {
            model: User,
            where: { id: req.params.id },
        }
    })
        .then((comments) => {
            console.log(comments);
            res.json(comments);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        })
});

router.patch('/:id', (req, res, next) => {
    Comment.update({
        comment: req.body.comment,
    }, {
        where: { id: req.params.id },
    })
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.delete('/:id', (req, res, next) => {
    Comment.destroy({
        where:{ id: req.params.id },
    })
        .then((result) => {
            console.log(result);
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

// 왜 post만 아이디가 없을까
// get: 가져오다, patch: 수정하다, delete: 제거하다, post: 생성하다
router.post('/', (req, res, next) => {
    Comment.create({
        commenter: '',
        comment: req.body.comment,
    })
        .then((result) => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;