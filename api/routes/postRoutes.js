
const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig')

// GET all users
router.get('/', async (req, res) => {
    await db('posts')
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get posts.'});
    });
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    await db('posts').where({ id })
    .then(post => {
        if(post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'There is no post with that id.'});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get post.'});
    });
});
  
router.post('/', async (req, res) => {
    await db('posts').insert(req.body)
    .then(post => {
        if(post) {
            console.log(post);
            return res.status(200).json({ message: 'Post was created successfully.'});
        } else {
            return res.status(404).json({ error: 'Could not create new post' });
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

module.exports = router;