
const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { checkJwt } = require('../check-jwt');

// GET all posts
router.get('/', async (req, res) => {
    await db('posts')
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get posts.'});
    });
});

// GET post with id
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

// GET all posts of category
router.get('/category/:cat', async (req, res) => {
    const { cat } = req.params;
    await db('posts').where({ category: cat })
    .then(posts => {
        if(posts) {
            res.status(200).json(posts);
        } else {
            res.status(404).json({ message: 'There are no posts matching that cetegory.'});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get category posts.'});
    });
});

// POST new post
router.post('/', checkJwt, jsonParser, async (req, res) => {
    await db('posts').insert(req.body)
    .then(post => {
        if(post) {
            return res.status(200).json({ message: 'Post was created successfully.'});
        } else {
            return res.status(404).json({ error: 'Could not create new post' });
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

// PUT edit post
router.put('/:id', checkJwt, jsonParser, async (req, res) => {
    const { id } = req.params;
    await db('posts').where({ id: id })
    .update(req.body)
    .then(updatedPost => {
        if(updatedPost) {
            return res.status(200).json({ message: 'Post was successfully updated.' });
        } else {
            return res.status(404).json({ error: 'Could not update post with that id.' });
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });

});

// DELETE post at id
router.delete('/:id', checkJwt, async (req, res) => {
    const { id } = req.params;
    await db('posts').where({ id: id })
    .del()
    .then(deletedPost => {
        if(deletedPost) {
            return res.status(200).json({ message: 'Post was successfully deleted.' });
        } else  {
            return res.status(404).json({ error: 'Could not delete post with that id.' });

        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

module.exports = router;