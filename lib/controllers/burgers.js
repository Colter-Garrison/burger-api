const { Router } = require('express');
const Burger = require('../models/BurgersInfo');

module.exports = Router()
  .get('/:id', async (req, res) => {
    // console.log('id param:', req.params.id);
    const burger = await Burger.getById(req.params.id);
    // console.log(burger);
    res.json(burger);
  })
  .get('/', async (req, res) => {
    const burgers = await Burger.getAll();
    const ids = burgers.map((burger) => ({ id: burger.id, name: burger.name }));
    // console.log(burgers);
    // console.log(ids);
    res.json(ids);
  });
