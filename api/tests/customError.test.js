const CustomError = require("../src/utils/customError.js");

describe("CustomError", () => {
  it("should create a CustomError instance with the correct properties", () => {
    const errMsg = "This is a custom error";
    const statusCode = 404;
    const source = "customError.test.js";

    const error = new CustomError(errMsg, statusCode, source);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(CustomError);
    expect(error.message).toBe(errMsg);
    expect(error.statusCode).toBe(statusCode);
    expect(error.status).toBe("fail");
    expect(error.isOperational).toBe(true);
    expect(error.source).toBe(source);
  });

  it("should create a CustomError instance with status 'error' for statusCode >= 500", () => {
    const errMsg = "This is a custom error";
    const statusCode = 500;
    const source = "customError.test.js";

    const error = new CustomError(errMsg, statusCode, source);

    expect(error.status).toBe("error");
  });

  it("should create a CustomError instance with status 'fail' for statusCode >= 400 and < 500", () => {
    const errMsg = "This is a custom error";
    const statusCode = 400;
    const source = "customError.test.js";

    const error = new CustomError(errMsg, statusCode, source);

    expect(error.status).toBe("fail");
  });

  it("should have the stack trace captured", () => {
    const errMsg = "This is a custom error";
    const statusCode = 404;
    const source = "customError.test.js";

    const error = new CustomError(errMsg, statusCode, source);

    expect(error.stack).toBeDefined();
    expect(error.stack.includes("customError.test.js")).toBe(true);
  });
});
