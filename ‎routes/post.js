// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const router = express.Router();

// importiamo il controller
const postController = require('../‎controllers/postController');

// rotte CRUD

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// Create
router.post('/', postController.store);

// Update 
router.put('/:id', postController.update);

// Delete 
router.delete('/:id', postController.destroy);

// esporta l'istanza di queste rotte
module.exports = router;