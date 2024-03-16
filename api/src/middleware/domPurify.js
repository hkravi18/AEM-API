const { JSDOM } = require("jsdom");
const createDOMPurify = require("dompurify");

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

const handlePurify = (req, res, next) => {
  if (req.body) {
    for (let key in req.body) {
      req.body[key] = DOMPurify.sanitize(req.body[key]);
    }
  }
  next();
};

module.exports = handlePurify;
