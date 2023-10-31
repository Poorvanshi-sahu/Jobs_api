// controllers basically contains functions
const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const BadRequestError = require("../errors/bad-request-Error");
const { UnauthorisedAccessError } = require("../errors");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = await user.createJWT();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnauthorisedAccessError("You are not authorised");
  }

  const checkPasswordMatch = await user.matchPassword(password);

  if (!checkPasswordMatch) {
    throw new UnauthorisedAccessError("Invalid credentials");
  }

  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
