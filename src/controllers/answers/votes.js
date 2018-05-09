const votes = ({Answer, Vote}) => async (req, res, next) => {
    const {_id} = req.params;
    try {
        const answer = await Answer.findOne({_id});
        const vote = await Vote.find({answerId: _id});
        res.status(200).send({answer, vote});
    } catch (error) {
        next(error);
    }
};

module.exports = {votes};