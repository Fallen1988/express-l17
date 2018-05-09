const _ = require('lodash');

const list = ({Vote}) => async(req, res, next) => {
    let {limit, skip, search} = req.query;
    limit = limit? parseInt(limit, 10) : 100;
    skip = skip ? parseInt( skip, 10) : 10;

    try {
        const query = {};
        if(search) {
            _.extend(query, {title: new RegExp(`${search}`, 'i')});
        }
        const vote = await Vote.find({})
            .skip(skip)
            .limit(limit)
            .sort({_id: -1});

        res.status(200).send({vote});
    } catch (error) {
        next(error);
    }
};

module.exports = {list};