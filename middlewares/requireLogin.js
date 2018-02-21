module.exports = (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .send({ error: 'You must log in to complete this request.' });
  }
  next();
};
