const httpStatus = require("http-status");

const serverError = (res) => {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong, try again later",
  });
};

const successResponse = (res, message, code, data) => {
  return res.status(code).json({
    success: true,
    message,
    data,
  });
};

module.exports = {
  serverError,
  successResponse,
};
