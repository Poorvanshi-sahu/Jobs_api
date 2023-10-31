const CustomAPIError = require("./custom-api-error");
const { StatusCodes } = require("http-status-codes");

class UnauthorisedAccessError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statuscode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorisedAccessError;
