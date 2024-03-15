const {
  userValidation,
  transactionValidation,
} = require("../src/utils/handleValidation.js");

describe("User Validation", () => {
  it("should fail if email or password is missing", () => {
    const result = userValidation("username", "", "password", "signup");
    expect(result).toEqual({
      valid: false,
      error: "Please fill all the fields",
    });
  });

  it("should fail if username is missing on signup", () => {
    const result = userValidation(
      "",
      "email@example.com",
      "password",
      "signup"
    );
    expect(result).toEqual({
      valid: false,
      error: "Please fill all the fields",
    });
  });

  it("should fail if username is less than 8 characters", () => {
    const result = userValidation(
      "user",
      "email@example.com",
      "password",
      "signup"
    );
    expect(result).toEqual({
      valid: false,
      error: "Username needs to be at least 8 characters",
    });
  });

  it("should fail if email is invalid", () => {
    const result = userValidation(
      "username",
      "invalidemail",
      "password",
      "signup"
    );
    expect(result).toEqual({
      valid: false,
      error: "Please enter a valid email address",
    });
  });

  it("should pass if all fields are correctly filled for signup", () => {
    const result = userValidation(
      "username123",
      "email@example.com",
      "password",
      "signup"
    );
    expect(result).toEqual({
      valid: true,
      message: "All fields filled correctly",
    });
  });
});

describe("Transaction Validation", () => {
  it("should fail if type is missing", () => {
    const result = transactionValidation({ amount: 100 });
    expect(result).toEqual({
      valid: false,
      error: "type is needed for the transaction",
    });
  });

  it("should fail if amount is missing", () => {
    const result = transactionValidation({ type: "INCOME" });
    expect(result).toEqual({
      valid: false,
      error: "amount is needed for the transaction",
    });
  });

  it("should fail if type is not INCOME or EXPENSE", () => {
    const result = transactionValidation({ type: "INVALID", amount: 100 });
    expect(result).toEqual({
      valid: false,
      error: "type can only be either INCOME or EXPENSE",
    });
  });

  it("should pass if type and amount are correctly provided", () => {
    const result = transactionValidation({ type: "INCOME", amount: 100 });
    expect(result).toEqual({
      valid: true,
      message: "All fields filled correctly",
    });
  });
});
