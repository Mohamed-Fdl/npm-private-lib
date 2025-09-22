const IsTest = (stringInput) => {
  return typeof stringInput === "string" && stringInput === "TEST";
};

module.exports = IsTest;
