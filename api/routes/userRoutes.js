const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Get all users
router.get('/', async (req, res) => {
    await db('users')
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        res.status(500).json({ message: 'Could not get users.'});
    });
});

// Get user by :id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    await db('users').where({ id })
    .then(user => {
        if(user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'There is no user with that id.'});
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get user.'});
    });
});

// Post add new user
router.post('/', jsonParser, async (req, res) => {
    await db('users').insert(req.body)
    .then(post => {
        if(post) {
            return res.status(200).json({ message: 'User was created successfully.'});
        } else {
            return res.status(404).json({ error: 'Could not create new user' });
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});

// Put edit user
router.put('/:id', jsonParser, async (req, res) => {
    const { id } = req.params;
    await db('users').where({ id: id })
    .update(req.body)
    .then(updatedUser => {
        if(updatedUser) {
            return res.status(200).json({ message: 'User was successfully updated.' });
        } else {
            return res.status(404).json({ error: 'Could not update user with that id.' });
        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });

});

// DELETE user at id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await db('users').where({ id: id })
    .del()
    .then(deletedUser => {
        if(deletedUser) {
            return res.status(200).json({ message: 'User was successfully deleted.' });
        } else  {
            return res.status(404).json({ error: 'Could not delete user with that id.' });

        }
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});


module.exports = router;