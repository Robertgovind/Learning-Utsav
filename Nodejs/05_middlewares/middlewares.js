const middleware1 = (req, res, next) => {
  console.log("Route level middleware 1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("Route level middleware 2");
  next();
};
const middleware3 = (req, res, next) => {
  console.log("Route level middleware 3");
  next();
};

export default { middleware1, middleware2, middleware3 };
