const userValidation = (username, email, password, act) => {
    if ((!email || !password) || (act === "signup" && !username)) {
        return {
            valid: false,
            error: "Please fill all the fields"
        };
    } 

    if (act === "signup" && username.length < 8) {
        return {
            valid: false,
            error: "Username needs to be at least 8 characters"
        };
    } 

    if (/^\S+@\S+\.\S+$/.test(email) === false) {
        return {
            valid: false, 
            error: "Please enter a valid email address"
        } 
    }

    return {
        valid: true,
        message: "All fields filled correctly" 
    };
};

const transactionValidation = ({ type, amount }) => {
    if (!type) return { valid: false, error: "type is needed for the transaction" };
    if (!amount) return { valid: false, error: "amount is needed for the transaction" };

    if (type !== "INCOME" && type !== "EXPENSE") {
        return {
            valid: false,
            error: "type can only be either INCOME or EXPENSE"
        };
    };

    return {
        valid: true,
        message: "All fields filled correctly" 
    };
};

module.exports = {
    userValidation,
    transactionValidation
};    