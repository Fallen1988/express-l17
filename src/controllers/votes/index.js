const {Router: router} = require('express');

const {list} = require('./list');
const {get} = require('./get');
const {create} = require('./create');
const {update} = require('./update');
const {remove} = require('./remove');

module.exports = (models, {config}) => {
    const api = router();

    api.get('/', list(models, {config}));
    api.post('/', create(models, {config}));
    api.get('/:_id', get(models, {config}));
    api.patch('/:_id', update(models, {config}));
    api.delete('/:_id', remove(models, {config}));

    return api;
};