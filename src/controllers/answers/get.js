const get = ({Answer}, {config}) => async (req, res, next) => {
  const {_id} = req.params;

  try {
      const answer = await Answer.find({_id});
      res.status(200).send({answer})
  } catch (error) {
      next(error);
  }
};

module.exports = {get};