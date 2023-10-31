const StatusCodes = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const customError = {
    customMessage: err.message || "Something went wrong",
    customStatusCodes: err.statuscode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statuscode).json({ msg: err.message });
  // }

  if (err.name && err.name === "CastError") {
    customError.customMessage = `No job with the id ${err.value}`;
    customError.customStatusCodes = 404;
  }

  if (err.name && err.name === "ValidationError") {
    customError.customMessage = `${Object.values(err.errors)
      .map((oneError) => oneError.message)
      .join(",")}`;
    customError.customStatusCodes = 400;
  }

  if (err.code && err.code === 11000) {
    customError.customMessage = `Duplicate email error,one email is already present by the name ${err.keyValue.email}`;
    customError.customStatusCodes = 400;
  }

  // res
  //   .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //   .json({ success: false, msg: err });

  res
    .status(customError.customStatusCodes)
    .json({ success: false, msg: customError.customMessage });
};

module.exports = errorHandler;
