const answers = ({ Question, Answer }) => async (req, res, next) => {
    const { _id } = req.params;
    try {
        const question = await Question.findOne({ _id });
        const answer = await Answer.find({questionId: _id});
        res.status(200).send({question, answer});
    } catch (error) {
        next(error);
    }
};

module.exports= { answers };