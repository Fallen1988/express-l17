const { Router: router } = require('express');

const { list } = require('./list');
const { get } = require('./get');
const { create } = require('./create');
const { remove } = require('./remove');
const { update } = require('./update');
const {votes} = require('./votes');

module.exports = (models, {config}) => {
    const api = router();

    api.get('/', list(models, {config}));
    api.post('/', create(models, {config}));
    api.get('/:_id', get(models, {config}));
    api.delete('/:_id', remove(models, {config}));
    api.patch('/:_id', update(models, {config}));
    api.get('/:_id/votes', votes(models, {config}));

    return api;
};