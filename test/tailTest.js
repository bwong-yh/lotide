const { assertEqual, tail } = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const result2 = tail(["Goodbye"]);
assertEqual(result2.length, 0);
assertEqual(result2[0], "Goodbye");
assertEqual(result2[0], undefined);

const result3 = tail([]);
assertEqual(result3.length, 0);
assertEqual(result2[0], "Something");
assertEqual(result2[0], undefined);
