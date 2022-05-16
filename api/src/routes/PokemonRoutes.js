const express = require('express');
const createPokemon = require('../Controllers/createPokemon');
const getAllPokemons = require('../Controllers/getAllPokemon');
const getById = require('../Controllers/getById');
const deletePokemon = require('../Controllers/deletePokemon');


const router = express.Router();

router.get('/', getAllPokemons);
router.get("/:id", getById);
router.post("/create", createPokemon)
router.delete("/delete/:id", deletePokemon);

module.exports = router