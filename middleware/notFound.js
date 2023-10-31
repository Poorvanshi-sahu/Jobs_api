const notFoundMiddleware = (req, res) => {
  res.status(404).json({ success: false, msg: "Not Found" });
};

module.exports = notFoundMiddleware;
