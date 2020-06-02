const add = (num1, num2) => {
  if (typeof num1 != "number") throw new Error("num1 should be number");
  if (typeof num2 != "number") throw new Error("num2 should be number");
  return num1 + num2;
};

const minus = (num1, num2) => {
  if (typeof num1 != "number") throw new Error("num1 should be number");
  if (typeof num2 != "number") throw new Error("num2 should be number");
  return num1 - num2;
};
module.exports = { add, minus };
