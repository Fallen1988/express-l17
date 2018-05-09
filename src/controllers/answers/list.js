const _ = require('lodash');

const list = ({Answer}, {config}) => async (req, res, next) => {
    let {limit, skip, search} = req.query;
    skip = skip ? parseInt(skip, 10) : 10;
    limit = limit ? parseInt(limit, 10) : 100;

    try {
        const query = {};
        if (search) {
            _.extend(query, {title: new RegExp(`${search}`, 'i') })
        }
        const answer = await Answer.find(query)
            .skip(skip)
            .limit(limit)
            .sort({ _id: -1 });
        res.status(200).send({answer})
    } catch (error) {
        next(error);
    }
};

module.exports = { list };