const CustomAPIError = require("./custom-api-error");
const BadRequestError = require("./bad-request-Error");
const UnauthorisedAccessError = require("./unauthorized-access");
const notFoundError = require("./notFound");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthorisedAccessError,
  notFoundError,
};
