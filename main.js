const logLowerCase = (object) => {
  object.forEach((item) => {
    item.toLowerCase();
    console.log("Item: " + item);
  });
};

logLowerCase(["1", "2", "3"]);
