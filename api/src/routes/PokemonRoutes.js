const express = require('express');
const getAllPokemons = require('../Controllers/getAllPokemon');
const getById = require('../Controllers/getById');


const router = express.Router();

router.get('/', getAllPokemons);
router.get("/:id", getById);

module.exports = router